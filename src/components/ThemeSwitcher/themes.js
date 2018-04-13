const themes = [
  {
    name: 'blue-alt',
    firstTime: true,
    colorPrimary: '#FAFAFA',
    colorAlternate: '#02405a',
    colorHighlight: '#2a93cb',
    textPrimary: '#FAFAFA',
    navAlpha: 'rgba(78, 169, 218, 0.75)'
  },
  {
    name: 'cyan-alt',
    firstTime: true,
    colorPrimary: '#FAFAFA',
    colorAlternate: '#51c1b7',
    colorHighlight: '#35a698',
    textPrimary: '#FAFAFA',
    navAlpha: 'rgba(61, 192, 176, 0.75)'
  }
];

export const getThemes = () => {
  return themes.map((theme) => {
    return {
      name: theme.name,
      firstTime: theme.firstTime,
      colorPrimary: theme.colorPrimary,
      colorAlternate: theme.colorAlternate,
      colorHighlight: theme.colorHighlight,
      bgPrimary: theme.colorAlternate,
      bgAlternate: theme.colorPrimary,
      bgLanding: theme.colorPrimary,
      textPrimary: theme.textPrimary,
      textAlternate: theme.colorAlternate,
      textLanding: theme.colorPrimary,
      parallaxStars: theme.colorPrimary,
      navAlpha: theme.navAlpha
    };
  });
};
