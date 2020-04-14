
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});


const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});


const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 6000
});

const elems = document.querySelectorAll('.fixed-action-btn');
M.FloatingActionButton.init(elems, options);

