// All blog posts as a collection
export const getAllPosts = collection => {
  return collection.getFilteredByGlob('./src/{posts,project-notes}/**/*.md').reverse();
};

// All relevant pages as a collection for sitemap.xml
export const showInSitemap = collection => {
  return collection.getFilteredByGlob('./src/**/*.{md,njk}');
};

// All tags from all posts as a collection - excluding custom collections
export const tagList = collection => {
  const tagsSet = new Set();
  collection.getAll().forEach(item => {
    if (!item.data.tags) return;
    item.data.tags
      .filter(
        tag =>
          !['skills', 'education', 'prior_experience', 'recent_experience', 'resume', 'all'].includes(tag)
      )
      .forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
};

// All projects as a collection
export const projects = collection => {
  return collection.getFilteredByGlob('./src/projects/**/*.md').reverse();
};

// Just project notes as a collection
export const projectNotes = collection => {
  return collection.getFilteredByGlob('./src/project-notes/**/*.md').reverse();
};

export const resumeRecentExperience = collection => {
  return collection.getFilteredByGlob('./src/resume/experience/recent/*.md').reverse();
};

export const resumePriorExperience = collection => {
  return collection.getFilteredByGlob('./src/resume/experience/prior/*.md').reverse();
};

export const resumeSkills = collection => {
  return collection.getFilteredByTags('resume', 'skills');
};

// Resume / experience collections
export const resumeEducation = collection => {
  return collection.getFilteredByTags('resume', 'education');
};
