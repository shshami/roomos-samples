
function setup() {

  Alpine.store('model', {
    currentPage: 'home', // 'home', 'service'
    currentLanguage: 'english',
    services: [],

    init() {

      this.services = [
        { url: 'shshami@cisco.com', name: 'Shadi1' },
        { url: 'shshami2@cisco.com', name: 'Shadi2' },
        { url: 'shshami3@cisco.com', name: 'Shadi301' },
      ];
    },
    get page() {
      return this.currentPage;
    },
    set page(nextPage) {
      this.currentPage = nextPage;
    },
    currentLanguage: 'english',
    languages: ['english', 'norwegian'],
    get language() {
      return this.currentLanguage;
    },
    set language(current) {
      this.currentLanguage = current;
    },
  });

}

document.addEventListener('alpine:init', setup);

