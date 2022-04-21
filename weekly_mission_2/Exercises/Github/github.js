const repo = {
  name: "LaunchX",
  author: "carlogilmar",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
};

const issue = {
  title: "issue1",
  repositoryNameAssociated: "Name",
  status: true,
  numberOfComments: 20,
  labels: ["L1"],
  author: "name",
  dateCreated: new Date(),
  lastUpdated: new Date(),

  getTitleAndAuthor: function () {
    return `Title: ${this.title}\nAuthor: ${this.author}`;
  },
  getGeneralInfo: function () {
    return `general info`;
  },
};

const PullRequest = {
  title: "name",
  branchName: "Branch name",
  dateCreated: new Date(),
  status: false,
  repositoryNameAssociated: "name",

  getStatus: function () {
    return this.status;
  },

  getTitleAndAuthor: function () {
    return `Title: ${this.title}\nAuthor: ${this.author}`;
  },
};

console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());
