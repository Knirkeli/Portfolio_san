import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: "an8m46y3",
    dataset: "production",
    title: "My portfolio",
    apiVersion: "2024-01-29",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: { types: schemas },
})

export default config;