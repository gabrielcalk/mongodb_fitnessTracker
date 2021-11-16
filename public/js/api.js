const API={
  // Getting the last workout
  async getLastWorkout(){
    let res;
    try{
      res = await fetch('/api/workouts');
    }catch (err){
      console.log(err)
    }
    const json = await res.json()

  // Taking the last workout (-1 because the count start on 0)
    return json[json.length - 1];
  },
  // adding the exercise to the database 
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  // Creating one new workout
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },
  // Getting the workouts that will be display on the dashboard (/stats)
  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
