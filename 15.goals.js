const goals = [
  {
    player: "Messi",
    team: "Barcelona",
    against: "Real Madrid",
    score: "1-0",
    minute: 90
  },
  {
    player: "Iniesta",
    team: "Barcelona",
    against: "Real Madrid",
    score: "2-1",
    minute: 10
  },
  {
    player: "Messi",
    team: "Barcelona",
    against: "Estudiantes",
    score: "1-0",
    minute: 88
  },
  {
    player: "Tevez",
    team: "Boca",
    against: "River",
    score: "3-2",
    minute: 80
  },
];

function getGoalsFrom(player) {
  return goals.filter(g => g.player.toLowerCase() === player.toLowerCase());
}

function asyncTaskAndGetGoals(callback) {
  setTimeout(() => {
    callback(goals);
  }, 100);
}

function asyncPromiseAndGetGoals() {
  return Promise.resolve(goals);
}

module.exports = {
  goals,
  getGoalsFrom,
  asyncTaskAndGetGoals,
  asyncPromiseAndGetGoals
};