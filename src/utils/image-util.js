function getImageUrl(name, type) {
  if (type == "project") {
    return new URL(`../assets/projects/${name}`, import.meta.url).href;
  } else if (type == "job") {
    return new URL(`../assets/work/${name}`, import.meta.url).href;
  } else if (type == "school") {
    return new URL(`../assets/education/${name}`, import.meta.url).href;
  }
}

export { getImageUrl };
