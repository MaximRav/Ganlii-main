test('Navigation links should navigate to the correct pages', () => {
  // Arrange
  const homeLink = document.querySelector('a[href="index.html"]');
  const aboutLink = document.querySelector('a[href="aboutPage.html"]');
  const gardensLink = document.querySelector('a[href="GardensList.html"]');

  // Act
  const homeHref = homeLink.getAttribute('href');
  const aboutHref = aboutLink.getAttribute('href');
  const gardensHref = gardensLink.getAttribute('href');

  // Assert
  expect(homeHref).toBe('index.html');
  expect(aboutHref).toBe('aboutPage.html');
  expect(gardensHref).toBe('GardensList.html');
});
