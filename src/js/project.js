const urlIdParams = new URL(window.location.href).searchParams.get('id');
const projectSkill = makeSkillList(projectData[urlIdParams - 1].skill);

renderProjectDetail(urlIdParams);

if (projectSkill) {
  document.querySelector('.skill.content').appendChild(projectSkill);
}

document.title = `${projectData[urlIdParams - 1].title} | MILLY HSIEH`;