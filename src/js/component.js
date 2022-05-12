projectTemplate = `
  <li class="card__item" data-category={category} style="background-image: url({image});">
    <div class="card__content">
      <a class="link" href={demoUrl} target="_blank">
        <i class="fa-solid fa-link"></i>
      </a>
      <div class="detail">
        <p class="detail__title">{title}</p>
        <a class="detail__button" href="./project.html?id={id}">More Detail</a>
      </div>
    </div>
  </li>
`

function renderProjectCard() {
  projectData.forEach(function (item, index) {
    let template = projectTemplate;
    const li = document.createElement('li');
    document.querySelector('.card__list').appendChild(li);
  
    if (item.demoUrl === '') {
      template = template.replaceAll(
        `class="link"`,
        `class="link hide"`
      )
    }

    template = template.replaceAll(
      `{category}`,
      `${item.category}`
    );
  
    template = template.replaceAll(
      `{image}`,
      `${item.image}`
    );
    
    template = template.replaceAll(
      `{title}`,
      `${item.title}`
    );
    
    template = template.replaceAll(
      `{id}`,
      `${item.id}`
    );
    
    template = template.replaceAll(
      `{demoUrl}`,
      `${item.demoUrl}`
    );
  
    li.outerHTML = template;
  })
}

projectDetailTemplate = `
  <section class="description">
    <div class="description__top">
        <div class="title">{title}</div>
        <div>
          <a href={sourceCodeUrl} target="_blank" class="code">
            Source Code
            <i class="fa-solid fa-link"></i>
          </a>
          <a href={demoUrl} target="_blank" class="demo">
            Link
            <i class="fa-solid fa-link"></i>
          </a>
        </div>
    </div>
    <div class="description__bottom">
      <div>
        <div class="duration">
          <div class="title">duration</div>
          <div class="content">{duration}</div>
        </div>
        <div class="role">
          <div class="title">role</div>
          <div class="content">{role}</div>
        </div>
      </div>
      <div>
        <div class="title">使用技術</div>
        <div class="content skill"></div>
      </div>
    </div>
  </section>
  <section class="image">
    <img src="{image}" alt="cover" class="cover">
  </section>
`
function makeSkillList(array) {
  const list = document.createElement('ul');

  if (!array) return;

  for (var i = 0; i < array.length; i++) {
      var item = document.createElement('li');

      item.appendChild(document.createTextNode(array[i]));
      list.appendChild(item);
  }
  return list;
}

function renderProjectDetail(id) {
  const section = document.createElement('section');
  let template = projectDetailTemplate;
  let projectId = id - 1;
  
  document.querySelector('.detail').appendChild(section);

  if (projectData[projectId].demoUrl === '') {
    template = template.replaceAll(
      `class="demo"`,
      `class="demo hide"`
    )
  }

  if (projectData[projectId].sourceCodeUrl === '') {
    template = template.replaceAll(
      `class="code"`,
      `class="code hide"`
    )
  }

  if (!projectData[projectId].skill) {
    template = template.replaceAll(
      `<div>
        <div class="title">使用技術</div>
        <div class="content skill"></div>
      </div>`,
      ``
    )
  }

  template = template.replaceAll(
    `{title}`,
    `${projectData[projectId].title}`
  );
  
  template = template.replaceAll(
    `{sourceCodeUrl}`,
    `${projectData[projectId].sourceCodeUrl}`
  );
  
  template = template.replaceAll(
    `{demoUrl}`,
    `${projectData[projectId].demoUrl}`
  );

  template = template.replaceAll(
    `{role}`,
    `${projectData[projectId].role}`
  );

  template = template.replaceAll(
    `{duration}`,
    `${projectData[projectId].duration}`
  );

  template = template.replaceAll(
    `{image}`,
    `${projectData[projectId].image}`
  );

  section.outerHTML = template;
}