import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import CurriculumPagePreview from './preview-templates/CurriculumPagePreview';
import ExperienceItemPreview from './preview-templates/ExperienceItemPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('curriculum', CurriculumPagePreview)
CMS.registerPreviewTemplate('experience', ExperienceItemPreview)
