/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

export function getAllMarkDownData(directory) {
  const markDownDirectory = path.join(process.cwd(), directory);
  // Get file names under /posts
  const fileNames = fs.readdirSync(markDownDirectory);
  return fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    // const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(markDownDirectory, `${fileName}/index.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id: fileName,
      ...matterResult.data
    };
  });
}

export function getAllMarkDownIds(directory) {
  const markDownDirectory = path.join(process.cwd(), directory);
  const fileNames = fs.readdirSync(markDownDirectory);

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName
      }
    };
  });
}

export async function getMarkDownData(directory, id) {
  const markDownDirectory = path.join(process.cwd(), directory);
  const files = fs.readdirSync(markDownDirectory);
  const allData = {};

  for (const file of files) {
    const lang = file.replace(/\.md$/, '');
    const fullPath = path.join(markDownDirectory, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    allData[lang] = { contentHtml, ...matterResult.data };
  }

  return {
    id,
    ...allData
  };
}
