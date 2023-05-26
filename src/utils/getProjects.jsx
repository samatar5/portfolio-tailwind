export async function getProjects() {
  const resSE = await fetch(`http://localhost:5173/datase.json`);
  const resEN = await fetch(`http://localhost:5173/dataen.json`);

  if (!resSE.ok) {
    throw new Error(
      `Failed to fetch projects: ${resSE.status} ${resSE.statusText}`
    );
  }

  if (!resEN.ok) {
    throw new Error(
      `Failed to fetch projects: ${resEN.status} ${resEN.statusText}`
    );
  }

  const projectsSE = await resSE.json();
  const projectsEN = await resEN.json();

  const projectData = {
    projectsSE,
    projectsEN,
  };

  return projectData;
}
