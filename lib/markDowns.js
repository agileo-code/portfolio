/* eslint-disable guard-for-in */
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
  const folders = fs.readdirSync(markDownDirectory);

  return folders.map(folder => {
    const projectDirectory = path.join(process.cwd(), `${directory}/${folder}`);
    const files = fs.readdirSync(projectDirectory);
    const projectData = {};

    files.forEach(file => {
      const lang = file.replace(/\.md$/, '');
      const fullPath = path.join(markDownDirectory, `${folder}/${file}`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      projectData[lang] = { ...matterResult.data };
    });

    return {
      id: folder,
      ...projectData
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
