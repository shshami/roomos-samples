
function setup() {

  Alpine.store('model', {
    currentPage: 'home', // 'home', 'service'
    currentLanguage: 'english',
    services: [],

    init() {

      this.services = [
        { url: 'saallawa@cisco.com', name: 'Sales' },
        { url: 'shshami@cisco.com', name: 'Presales' },
        { url: 'ajarrar@cisco.com', name: 'Partners' },
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

