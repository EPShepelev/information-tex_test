fetch("http://www.json-generator.com/api/json/get/bTRegnLmXm?indent=2")
  .then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res;
    } else {
      let error = new Error(res.statusText);
      error.response = res;
      throw error;
    }
  })
  .then((res) => res.json())
  .then((data) => {
    showIcon();
    getNewsCount(data);
    data.forEach((item) => {
      createNewsWidget(item);
    });
  })
  .catch((e) => {
    console.log("Error: " + e.message);
    console.log(e.response);
  });

function getNewsCount(item) {
  const newsCount = item.length;
  document.querySelector(".widget__icon-count").innerHTML = newsCount;
}

function deleteNEwsCount() {
  if (document.querySelector(".widget__icon-count")) {
    document.querySelector(".widget__icon-count").remove();
  }
}

function showIcon() {
  const icon = document.createElement("div");
  icon.classList.add("widget__icon");
  icon.insertAdjacentHTML(
    "afterbegin",
    `<div class="widget__icon" onclick="showNews()">
  <svg
    version="1"
    xmlns="http://www.w3.org/2000/svg"
    width="400"
    height="400"
    viewBox="0 0 300 300"
  >
    <g fill="#353535">
      <path
        d="M57.1 1.9c-6.5 2.3-9.6 4.5-13.8 10-4.4 5.7-5.3 9.7-5.3 23.2v11.7l-8.7.4c-13.2.7-21 5.3-26 15.6L.5 68.5l-.3 96.9C0 229 .3 264.2 1 267.9c2.2 12 10.2 22.5 21 27.9l5.5 2.7h244l5.7-2.7c7.6-3.5 14.3-9.9 18.1-17.3l3.2-6 .3-125.3.2-125.3-2.1-4.9c-2.4-5.5-8.8-12-14.6-14.7C278.7.6 271.9.5 170.5.3 67.5.1 62.3.1 57.1 1.9zm221 20l2.9 2.9V145c0 106.1-.2 120.5-1.5 123.8-2.1 4.9-5.2 8.1-10 10.3-3.8 1.8-9.3 1.9-119.5 1.9-110.3 0-115.7-.1-119.5-1.9-4.7-2.2-8.9-6.4-10.4-10.4-.8-1.9-1.1-33.8-1.1-100.1V71.3l2.4-2.6c2.6-2.8 7.2-4.1 12.7-3.5l3.4.3.5 95.7.5 95.7 2.3 2.3c3.3 3.4 9.7 3.1 12.8-.5l2.4-2.8V141.4c0-122.6-.2-118.5 4.7-121.3 1.2-.7 37.8-1 108.1-1.1h106.4l2.9 2.9z"
      />
      <path
        d="M78.3 40.4l-2.8 2.4-.3 36.1-.3 36 3 3.3 2.9 3.3 33.4.3c18.3.2 34.8 0 36.7-.3 1.8-.4 4.4-1.7 5.7-3l2.4-2.4V80.5c0-36.4-.2-38.4-3.9-41.2-1.2-.9-10.9-1.2-37.8-1.3H81.1l-2.8 2.4zm62.5 39.3l.2 23.3H94V56l23.3.2 23.2.3.3 23.2zm39.4-22.1c-2.4 1.7-2.9 4.3-1 6.2 1.7 1.7 79.9 1.7 81.6 0 1.9-1.9 1.4-4.5-1-6.2-1.9-1.4-7.4-1.6-39.8-1.6s-37.9.2-39.8 1.6zm0 28c-2.8 1.9-2.8 4.9 0 6.8 3.4 2.4 76.2 2.4 79.6 0 1.2-.8 2.2-2.4 2.2-3.4s-1-2.6-2.2-3.4c-1.9-1.4-7.4-1.6-39.8-1.6s-37.9.2-39.8 1.6zm.7 27.8c-3.2 1.6-3.6 5-.7 7 2 1.4 7 1.6 39.8 1.6s37.8-.2 39.8-1.6c2.9-2 2.5-5.4-.8-7.1-3.5-1.7-74.6-1.7-78.1.1zM76.2 142.2c-1.9 1.9-1.4 4.5 1 6.2 2 1.4 12.3 1.6 91.3 1.6s89.3-.2 91.3-1.6c2.4-1.7 2.9-4.3 1-6.2-1.7-1.7-182.9-1.7-184.6 0zm-.4 29.4c-1.1 2.3-1 2.9 1.1 4.5 2.2 1.8 5.7 1.9 91.5 1.9 79.1 0 89.4-.2 91.4-1.6 2.4-1.7 2.9-4.3 1-6.2-.9-.9-22.8-1.2-92.5-1.2H77l-1.2 2.6zm0 27.9c-.9 2.1-.8 2.8.7 4.5 1.8 1.9 3.1 2 40.6 2 33.9 0 39-.2 40.3-1.6 1.9-1.8 2.1-4.5.4-6.2-.9-.9-11.4-1.2-41-1.2H77l-1.2 2.5zm103.4-1.3c-1.7 1.7-1.5 4.4.4 6.2 1.3 1.4 6.4 1.6 40.4 1.6s39.1-.2 40.4-1.6c1.9-1.8 2.1-4.5.4-6.2-1.7-1.7-79.9-1.7-81.6 0zM75.8 227.5c-.9 2.1-.8 2.8.7 4.5 1.8 1.9 3.1 2 40.6 2 33.9 0 39-.2 40.3-1.6 1.9-1.8 2.1-4.5.4-6.2-.9-.9-11.4-1.2-41-1.2H77l-1.2 2.5zm103.4-1.3c-1.7 1.7-1.5 4.4.4 6.2 1.3 1.4 6.4 1.6 40.4 1.6s39.1-.2 40.4-1.6c1.9-1.8 2.1-4.5.4-6.2-1.7-1.7-79.9-1.7-81.6 0zM76 254.9c-1.4 2.7-1.3 3.7.6 5.5 1.3 1.4 6.4 1.6 40 1.6 24.7 0 39.2-.4 40.5-1 2.1-1.2 2.5-5 .7-6.8-.9-.9-11.4-1.2-41-1.2-38.3 0-39.8.1-40.8 1.9zm103.2-.7c-1.7 1.7-1.5 4.4.4 6.2 1.3 1.4 6.4 1.6 40.4 1.6s39.1-.2 40.4-1.6c1.9-1.8 2.1-4.5.4-6.2-1.7-1.7-79.9-1.7-81.6 0z"
      />
    </g>
  </svg>
  <div class="widget__icon-count"></div>
</div>`
  );
  document.body.appendChild(icon);
  return icon;
}

function createNewsWidget(item) {
  const widget = document.createElement("div");
  widget.classList.add("widget");
  widget.insertAdjacentHTML(
    "afterbegin",
    `<div class="widget__content--hide">
    <h3>${item.title}</h3>
    <p>${item.autor}</p>
    <p>${item.date}</p>
    <p><a href="${item.link}">Подробнее</a></p>
    <div class="read">Не прочитано</div>
  </div>`
  );
  document.body.appendChild(widget);
  return widget;
}

function showNews() {
  deleteNEwsCount();
  const widgets = document.querySelectorAll(".widget__content--hide");
  widgets.forEach((item) => {
    item.classList.remove("widget__content--hide");
    item.classList.add("widget__content--show");
  });
}
