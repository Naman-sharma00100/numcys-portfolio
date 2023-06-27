import { deskTool } from 'sanity/desk';
import { defineConfig } from "sanity";
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId : "5f8j9mfv",
    dataset: "production",
    title:"My personal website",
    apiVersion: "2023-06-27",
    basePath: "/admin",
    plugins: [deskTool()],
    schema:{types:schemas}
});

export default config;