const constants = {
  /**
   * List item sidebar
   *
   */
  Menu: [
    {
      text: "All Inboxes",
      path: "/",
    },

    {
      text: "Sent",
      path: "/sent",
    },

    {
      text: "Trash",
      path: "/trash",
    },
  ],
  all: [
    {
      id: 1,
      avt: `${__HOME_BASE_URL__}src/assets/img/header-avt.png`,
      name: "Raymond Chandler",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aliquam velit libero at inventore consectetur quam veniam ad blanditiis numquam est ex consequatur reiciendis dicta nam maxime, exercitationem, eligendi itaque, pariatur neque illum cumque odit? Voluptas tempore in voluptates recusandae ratione unde odio quia enim velit! Nisi eum animi molestias harum tempore ratione est tenetur? Libero voluptates sint repudiandae pariatur temporibus nulla repellendus illum! Assumenda repellendus dolore labore a reiciendis expedita totam eaque numquam? Quos voluptatibus eos voluptatum sequi. Rem modi ducimus eius nobis at sit? Reprehenderit nam magni dolore ratione corporis rem recusandae aperiam fugit asperiores praesentium. Illo, magni.",
      time: "00/00/00 July10",
    },
    {
      id: 2,
      avt: `${__HOME_BASE_URL__}src/assets/img/header-avt.png`,
      name: "Chandler",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aliquam velit libero at inventore consectetur quam veniam ad blanditiis numquam est ex consequatur reiciendis dicta nam maxime, exercitationem, eligendi itaque, pariatur neque illum cumque odit? Voluptas tempore in voluptates recusandae ratione unde odio quia enim velit! Nisi eum animi molestias harum tempore ratione est tenetur? Libero voluptates sint repudiandae pariatur temporibus nulla repellendus illum! Assumenda repellendus dolore labore a reiciendis expedita totam eaque numquam? Quos voluptatibus eos voluptatum sequi. Rem modi ducimus eius nobis at sit? Reprehenderit nam magni dolore ratione corporis rem recusandae aperiam fugit asperiores praesentium. Illo, magni.",
      time: "00/00/00 July10",
    },
    {
      id: 3,
      avt: `${__HOME_BASE_URL__}src/assets/img/header-avt.png`,
      name: "Raymond ",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aliquam velit libero at inventore consectetur quam veniam ad blanditiis numquam est ex consequatur reiciendis dicta nam maxime, exercitationem, eligendi itaque, pariatur neque illum cumque odit? Voluptas tempore in voluptates recusandae ratione unde odio quia enim velit! Nisi eum animi molestias harum tempore ratione est tenetur? Libero voluptates sint repudiandae pariatur temporibus nulla repellendus illum! Assumenda repellendus dolore labore a reiciendis expedita totam eaque numquam? Quos voluptatibus eos voluptatum sequi. Rem modi ducimus eius nobis at sit? Reprehenderit nam magni dolore ratione corporis rem recusandae aperiam fugit asperiores praesentium. Illo, magni.",
      time: "00/00/00 July10",
    },
    {
      id: 4,
      avt: `${__HOME_BASE_URL__}src/assets/img/header-avt.png`,
      name: "Raymond Chandler",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aliquam velit libero at inventore consectetur quam veniam ad blanditiis numquam est ex consequatur reiciendis dicta nam maxime, exercitationem, eligendi itaque, pariatur neque illum cumque odit? Voluptas tempore in voluptates recusandae ratione unde odio quia enim velit! Nisi eum animi molestias harum tempore ratione est tenetur? Libero voluptates sint repudiandae pariatur temporibus nulla repellendus illum! Assumenda repellendus dolore labore a reiciendis expedita totam eaque numquam? Quos voluptatibus eos voluptatum sequi. Rem modi ducimus eius nobis at sit? Reprehenderit nam magni dolore ratione corporis rem recusandae aperiam fugit asperiores praesentium. Illo, magni.",
      time: "00/00/00 July10",
    },
    {
      id: 5,
      avt: `${__HOME_BASE_URL__}src/assets/img/header-avt.png`,
      name: "Raymond Chandler",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aliquam velit libero at inventore consectetur quam veniam ad blanditiis numquam est ex consequatur reiciendis dicta nam maxime, exercitationem, eligendi itaque, pariatur neque illum cumque odit? Voluptas tempore in voluptates recusandae ratione unde odio quia enim velit! Nisi eum animi molestias harum tempore ratione est tenetur? Libero voluptates sint repudiandae pariatur temporibus nulla repellendus illum! Assumenda repellendus dolore labore a reiciendis expedita totam eaque numquam? Quos voluptatibus eos voluptatum sequi. Rem modi ducimus eius nobis at sit? Reprehenderit nam magni dolore ratione corporis rem recusandae aperiam fugit asperiores praesentium. Illo, magni.",
      time: "00/00/00 July10",
    },
    {
      id: 6,
      avt: `${__HOME_BASE_URL__}src/assets/img/header-avt.png`,
      name: "Raymond Chandler",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aliquam velit libero at inventore consectetur quam veniam ad blanditiis numquam est ex consequatur reiciendis dicta nam maxime, exercitationem, eligendi itaque, pariatur neque illum cumque odit? Voluptas tempore in voluptates recusandae ratione unde odio quia enim velit! Nisi eum animi molestias harum tempore ratione est tenetur? Libero voluptates sint repudiandae pariatur temporibus nulla repellendus illum! Assumenda repellendus dolore labore a reiciendis expedita totam eaque numquam? Quos voluptatibus eos voluptatum sequi. Rem modi ducimus eius nobis at sit? Reprehenderit nam magni dolore ratione corporis rem recusandae aperiam fugit asperiores praesentium. Illo, magni.",
      time: "00/00/00 July10",
    },
  ],
  sent: [
    {
      id: 1,
      avt: `${__HOME_BASE_URL__}src/assets/img/header-avt.png`,
      name: "Raymond Chandler",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aliquam velit libero at inventore consectetur quam veniam ad blanditiis numquam est ex consequatur reiciendis dicta nam maxime, exercitationem, eligendi itaque, pariatur neque illum cumque odit? Voluptas tempore in voluptates recusandae ratione unde odio quia enim velit! Nisi eum animi molestias harum tempore ratione est tenetur? Libero voluptates sint repudiandae pariatur temporibus nulla repellendus illum! Assumenda repellendus dolore labore a reiciendis expedita totam eaque numquam? Quos voluptatibus eos voluptatum sequi. Rem modi ducimus eius nobis at sit? Reprehenderit nam magni dolore ratione corporis rem recusandae aperiam fugit asperiores praesentium. Illo, magni.",
      time: "00/00/00 July10",
    },
    {
      id: 2,
      avt: `${__HOME_BASE_URL__}src/assets/img/header-avt.png`,
      name: "Raymond Chandler",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aliquam velit libero at inventore consectetur quam veniam ad blanditiis numquam est ex consequatur reiciendis dicta nam maxime, exercitationem, eligendi itaque, pariatur neque illum cumque odit? Voluptas tempore in voluptates recusandae ratione unde odio quia enim velit! Nisi eum animi molestias harum tempore ratione est tenetur? Libero voluptates sint repudiandae pariatur temporibus nulla repellendus illum! Assumenda repellendus dolore labore a reiciendis expedita totam eaque numquam? Quos voluptatibus eos voluptatum sequi. Rem modi ducimus eius nobis at sit? Reprehenderit nam magni dolore ratione corporis rem recusandae aperiam fugit asperiores praesentium. Illo, magni.",
      time: "00/00/00 July10",
    },
    {
      id: 3,
      avt: `${__HOME_BASE_URL__}src/assets/img/header-avt.png`,
      name: "Raymond Chandler",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aliquam velit libero at inventore consectetur quam veniam ad blanditiis numquam est ex consequatur reiciendis dicta nam maxime, exercitationem, eligendi itaque, pariatur neque illum cumque odit? Voluptas tempore in voluptates recusandae ratione unde odio quia enim velit! Nisi eum animi molestias harum tempore ratione est tenetur? Libero voluptates sint repudiandae pariatur temporibus nulla repellendus illum! Assumenda repellendus dolore labore a reiciendis expedita totam eaque numquam? Quos voluptatibus eos voluptatum sequi. Rem modi ducimus eius nobis at sit? Reprehenderit nam magni dolore ratione corporis rem recusandae aperiam fugit asperiores praesentium. Illo, magni.",
      time: "00/00/00 July10",
    },
    {
      id: 4,
      avt: `${__HOME_BASE_URL__}src/assets/img/header-avt.png`,
      name: "Raymond Chandler",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aliquam velit libero at inventore consectetur quam veniam ad blanditiis numquam est ex consequatur reiciendis dicta nam maxime, exercitationem, eligendi itaque, pariatur neque illum cumque odit? Voluptas tempore in voluptates recusandae ratione unde odio quia enim velit! Nisi eum animi molestias harum tempore ratione est tenetur? Libero voluptates sint repudiandae pariatur temporibus nulla repellendus illum! Assumenda repellendus dolore labore a reiciendis expedita totam eaque numquam? Quos voluptatibus eos voluptatum sequi. Rem modi ducimus eius nobis at sit? Reprehenderit nam magni dolore ratione corporis rem recusandae aperiam fugit asperiores praesentium. Illo, magni.",
      time: "00/00/00 July10",
    },
    {
      id: 5,
      avt: `${__HOME_BASE_URL__}src/assets/img/header-avt.png`,
      name: "Raymond Chandler",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aliquam velit libero at inventore consectetur quam veniam ad blanditiis numquam est ex consequatur reiciendis dicta nam maxime, exercitationem, eligendi itaque, pariatur neque illum cumque odit? Voluptas tempore in voluptates recusandae ratione unde odio quia enim velit! Nisi eum animi molestias harum tempore ratione est tenetur? Libero voluptates sint repudiandae pariatur temporibus nulla repellendus illum! Assumenda repellendus dolore labore a reiciendis expedita totam eaque numquam? Quos voluptatibus eos voluptatum sequi. Rem modi ducimus eius nobis at sit? Reprehenderit nam magni dolore ratione corporis rem recusandae aperiam fugit asperiores praesentium. Illo, magni.",
      time: "00/00/00 July10",
    },
    {
      id: 6,
      avt: `${__HOME_BASE_URL__}src/assets/img/header-avt.png`,
      name: "Raymond Chandler",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aliquam velit libero at inventore consectetur quam veniam ad blanditiis numquam est ex consequatur reiciendis dicta nam maxime, exercitationem, eligendi itaque, pariatur neque illum cumque odit? Voluptas tempore in voluptates recusandae ratione unde odio quia enim velit! Nisi eum animi molestias harum tempore ratione est tenetur? Libero voluptates sint repudiandae pariatur temporibus nulla repellendus illum! Assumenda repellendus dolore labore a reiciendis expedita totam eaque numquam? Quos voluptatibus eos voluptatum sequi. Rem modi ducimus eius nobis at sit? Reprehenderit nam magni dolore ratione corporis rem recusandae aperiam fugit asperiores praesentium. Illo, magni.",
      time: "00/00/00 July10",
    },
  ],
  trash: [
    {
      id: 1,
      avt: `${__HOME_BASE_URL__}src/assets/img/header-avt.png`,
      name: "Raymond Chandler",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aliquam velit libero at inventore consectetur quam veniam ad blanditiis numquam est ex consequatur reiciendis dicta nam maxime, exercitationem, eligendi itaque, pariatur neque illum cumque odit? Voluptas tempore in voluptates recusandae ratione unde odio quia enim velit! Nisi eum animi molestias harum tempore ratione est tenetur? Libero voluptates sint repudiandae pariatur temporibus nulla repellendus illum! Assumenda repellendus dolore labore a reiciendis expedita totam eaque numquam? Quos voluptatibus eos voluptatum sequi. Rem modi ducimus eius nobis at sit? Reprehenderit nam magni dolore ratione corporis rem recusandae aperiam fugit asperiores praesentium. Illo, magni.",
      time: "00/00/00 July10",
    },
    {
      id: 2,
      avt: `${__HOME_BASE_URL__}src/assets/img/header-avt.png`,
      name: "Raymond Chandler",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aliquam velit libero at inventore consectetur quam veniam ad blanditiis numquam est ex consequatur reiciendis dicta nam maxime, exercitationem, eligendi itaque, pariatur neque illum cumque odit? Voluptas tempore in voluptates recusandae ratione unde odio quia enim velit! Nisi eum animi molestias harum tempore ratione est tenetur? Libero voluptates sint repudiandae pariatur temporibus nulla repellendus illum! Assumenda repellendus dolore labore a reiciendis expedita totam eaque numquam? Quos voluptatibus eos voluptatum sequi. Rem modi ducimus eius nobis at sit? Reprehenderit nam magni dolore ratione corporis rem recusandae aperiam fugit asperiores praesentium. Illo, magni. ",
      time: "00/00/00 July10",
    },
    {
      id: 3,
      avt: `${__HOME_BASE_URL__}src/assets/img/header-avt.png`,
      name: "Raymond Chandler",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aliquam velit libero at inventore consectetur quam veniam ad blanditiis numquam est ex consequatur reiciendis dicta nam maxime, exercitationem, eligendi itaque, pariatur neque illum cumque odit? Voluptas tempore in voluptates recusandae ratione unde odio quia enim velit! Nisi eum animi molestias harum tempore ratione est tenetur? Libero voluptates sint repudiandae pariatur temporibus nulla repellendus illum! Assumenda repellendus dolore labore a reiciendis expedita totam eaque numquam? Quos voluptatibus eos voluptatum sequi. Rem modi ducimus eius nobis at sit? Reprehenderit nam magni dolore ratione corporis rem recusandae aperiam fugit asperiores praesentium. Illo, magni.",
      time: "00/00/00 July10",
    },
    {
      id: 4,
      avt: `${__HOME_BASE_URL__}src/assets/img/header-avt.png`,
      name: "Raymond Chandler",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aliquam velit libero at inventore consectetur quam veniam ad blanditiis numquam est ex consequatur reiciendis dicta nam maxime, exercitationem, eligendi itaque, pariatur neque illum cumque odit? Voluptas tempore in voluptates recusandae ratione unde odio quia enim velit! Nisi eum animi molestias harum tempore ratione est tenetur? Libero voluptates sint repudiandae pariatur temporibus nulla repellendus illum! Assumenda repellendus dolore labore a reiciendis expedita totam eaque numquam? Quos voluptatibus eos voluptatum sequi. Rem modi ducimus eius nobis at sit? Reprehenderit nam magni dolore ratione corporis rem recusandae aperiam fugit asperiores praesentium. Illo, magni.",
      time: "00/00/00 July10",
    },
    {
      id: 5,
      avt: `${__HOME_BASE_URL__}src/assets/img/header-avt.png`,
      name: "Raymond Chandler",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aliquam velit libero at inventore consectetur quam veniam ad blanditiis numquam est ex consequatur reiciendis dicta nam maxime, exercitationem, eligendi itaque, pariatur neque illum cumque odit? Voluptas tempore in voluptates recusandae ratione unde odio quia enim velit! Nisi eum animi molestias harum tempore ratione est tenetur? Libero voluptates sint repudiandae pariatur temporibus nulla repellendus illum! Assumenda repellendus dolore labore a reiciendis expedita totam eaque numquam? Quos voluptatibus eos voluptatum sequi. Rem modi ducimus eius nobis at sit? Reprehenderit nam magni dolore ratione corporis rem recusandae aperiam fugit asperiores praesentium. Illo, magni.",
      time: "00/00/00 July10",
    },
  ],
  /**
   * List item pageSize
   *
   */
  // listNavigateNumber: [
  //   {
  //     id: 10,
  //     value: "10 bản ghi trên 1 trang",
  //   },
  //   {
  //     id: 20,
  //     value: "20 bản ghi trên 1 trang",
  //   },
  //   {
  //     id: 30,
  //     value: "30 bản ghi trên 1 trang",
  //   },
  //   {
  //     id: 50,
  //     value: "50 bản ghi trên 1 trang",
  //   },
  //   {
  //     id: 100,
  //     value: "100 bản ghi trên 1 trang",
  //   },
  // ],
  // /**
  //  * List item pageSize
  //  *
  //  */
  // listStatusFilterImport: [
  //   {
  //     id: 3,
  //     value: "Tất cả",
  //   },
  //   {
  //     id: 1,
  //     value: "Không hợp lệ",
  //   },
  //   {
  //     id: 2,
  //     value: "Hợp lệ",
  //   },
  // ],
  /**
   * Regex
   *
   */
  // regexConstants: {
  // 	EmployeeCode: /^NV-[0-9]{1,17}$/,
  // 	Email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  // 	PhoneNumber: /((09|03|07|08|05)+([0-9]{8})\b)/,
  // 	PhoneNumberFixed: /((09|03|07|08|05)+([0-9]{8})\b)/,
  // },
};

export default constants;
