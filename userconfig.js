// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Thanh Hoa",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://www.google.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/3.gif",
      categories: [
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "Doc",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "Social",
          links: [
            {
              name: "Messenger",
              url: "https://www.messenger.com/",
              icon: "brand-messenger",
              icon_color: palette.green,
            },
            {
              name: "Wiki News",
              url: "https://en.wikinews.org/wiki/Main_Page",
              icon: "brand-wikipedia",
              icon_color: palette.peach,
            },
            {
              name: "Zalo",
              url: "https://chat.zalo.me/",
              icon: "letter-z",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "work",
      background_url: "src/img/banners/4.gif",
      categories: [
        {
          name: "resources",
          links: [
            {
              name: "Github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "FMHY",
              url: "https://fmhy.net/",
              icon: "circle-triangle",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "school",
          links: [
            {
              name: "MS Teams",
              url: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=5e3ce6c0-2b1f-4285-8d4b-75ee78787346&scope=openId%20profile%20openid%20offline_access&redirect_uri=https%3A%2F%2Fteams.microsoft.com%2Fv2&client-request-id=0192fb3f-1237-744e-a9b3-46ff4bd95781&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=3.18.0&client_info=1&code_challenge=7mKqDpZdultsJae_QJdVImim8UZkeWr55xQ0w2i3pHc&code_challenge_method=S256&nonce=0192fb3f-1239-7667-9291-9ba3399ad0a4&state=eyJpZCI6IjAxOTJmYjNmLTEyMzktNzMwOC05ZjkwLWZlY2Q4ZDcxYmYxZCIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D",
              icon: "brand-teams",
              icon_color: palette.green,
            },
            {
              name: "School Page",
              url: "https://sv.isvnu.vn/sinh-vien-dang-nhap.html",
              icon: "school",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
    {
      name: "relax",
      background_url: "src/img/banners/1.gif",
      categories: [
        {
          name: "Games Related",
          links: [
            {
              name: "MD Meta",
              url: "https://www.masterduelmeta.com/",
              icon: "cards",
              icon_color: palette.green,
            },
            {
              name: "Prydwen",
              url: "https://www.prydwen.gg/re1999/",
              icon: "packages",
              icon_color: palette.peach,
            },
            {
              name: "Steam",
              url: "https://store.steampowered.com/",
              icon: "brand-steam",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "Fun Stuff",
          links: [
            {
              name: "Monkey Type",
              url: "https://monkeytype.com/",
              icon: "keyboard",
              icon_color: palette.green,
            },
            {
              name: "Pokemon Showdown",
              url: "https://play.pokemonshowdown.com/",
              icon: "pokeball",
              icon_color: palette.peach,
            },
            {
              name: "Sand Physics",
              url: "https://sandboxels.r74n.com/",
              icon: "sparkles",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "Brain Rot",
          links: [
            {
              name: "Twitch",
              url: "https://www.twitch.tv/",
              icon: "brand-twitch",
              icon_color: palette.green,
            },
            {
              name: "Youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "Reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
