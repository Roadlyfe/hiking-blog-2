import { getDefaultDocumentNode } from './structure';
import { myTheme } from './theme';
import {defineConfig, StudioNavbar} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas';
import StudioNavBar from './components/StudioNavBar';
import Logo from './components/Logo';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'Hiking_Blog_Studio',
  title: 'Hiking Blog Studio',
  projectId,
  dataset,
  plugins: [deskTool({ 
    defaultDocumentNode: getDefaultDocumentNode,
  }), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavBar
    }
  },
  theme: myTheme,
});
