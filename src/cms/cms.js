import CMS from 'netlify-cms';

import AccomplishmentItemPreview from './preview-templates/AccomplishmentItemPreview';
import CurriculumPagePreview from './preview-templates/CurriculumPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import SkillPagePreview from './preview-templates/SkillsPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('curriculum', CurriculumPagePreview)
CMS.registerPreviewTemplate('accomplishments', AccomplishmentItemPreview)
CMS.registerPreviewTemplate('skills', SkillPagePreview)
