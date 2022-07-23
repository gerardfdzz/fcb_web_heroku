import { Injectable } from '@angular/core';

const url = "/assets/images/";
const equipo: Array<any> = [
  // Goalkeepers
  { id: 765786, number: 1, name: "Marc-André", surname: "Ter Stegen", backName: "Stegen", img: url + 'ter_stegen.png', position: "goalkeeper", games: 327, cleanSheets: 121, saves: 767, detailsImg: url + 'ter_stegen_details.png' },
  { id: 786578, number: 13, name: "Neto", surname: "", backName: "Neto", img: url + 'neto.png', position: "goalkeeper", games: 21, cleanSheets: 6, saves: 42, detailsImg: url + 'neto_details.png' },
  // Defenders
  { id: 456544, number: 2, name: "Sergiño", surname: "Dest", backName: "Dest", img: url + 'dest.png', position: "defender", games: 72, goals: 3, assists: 4, detailsImg: url + 'dest_details.png' },
  { id: 489562, number: 3, name: "Gerard", surname: "Piqué", backName: "Piqué", img: url + 'pique.png', position: "defender", games: 606, goals: 52, assists: 7, detailsImg: url + 'pique_details.png' },
  { id: 423584, number: 4, name: "Ronald", surname: "Araújo", backName: "Araújo", img: url + 'araujo.png', position: "defender", games: 82, goals: 6, assists: 1, detailsImg: url + 'araujo_details.png' },
  { id: 428964, number: 18, name: "Jordi", surname: "Alba", backName: "Alba", img: url + 'jordi_alba.png', position: "defender", games: 428, goals: 25, assists: 85, detailsImg: url + 'jordi_alba_details.png' },
  { id: 426868, number: 22, name: "Óscar", surname: "Mingueza", backName: "Mingueza", img: url + 'oscar_mingueza.png', position: "defender", games: 66, goals: 2, assists: 5, detailsImg: url + 'oscar_mingueza_details.png' },
  { id: 479885, number: 23, name: "Samuel", surname: "Umtiti", backName: "Umtiti", img: url + 'samuel_umtiti.png', position: "defender", games: 133, goals: 2, assists: 1, detailsImg: url + 'samuel_umtiti_details.png' },
  { id: 456823, number: 24, name: "Eric", surname: "García", backName: "García", img: url + 'eric_garcia.png', position: "defender", games: 36, goals: 0, assists: 0, detailsImg: url + 'eric_garcia_details.png' },
  { id: 498652, number: 0, name: "Andreas", surname: "Christensen", backName: "Christensen", img: url + 'andreas_christensen.png', position: "defender", games: 0, goals: 0, assists: 0, detailsImg: url + 'andreas_christensen_details.png' },
  // Midfielders
  { id: 168596, number: 5, name: "Sergio", surname: "Busquets", backName: "Busquets", img: url + 'sergio_busquets.png', position: "midfielder", games: 681, goals: 18, assists: 36, detailsImg: url + 'sergio_busquets_details.png' },
  { id: 198657, number: 6, name: "Riqui", surname: "Puig", backName: "Puig", img: url + 'riqui_puig.png', position: "midfielder", games: 57, goals: 2, assists: 3, detailsImg: url + 'riqui_puig_details.png' },
  { id: 135974, number: 8, name: "Pedri", surname: "", backName: "Pedri", img: url + 'pedri_gonzalez.png', position: "midfielder", games: 74, goals: 9, assists: 7, detailsImg: url + 'pedri_gonzalez_details.png' },
  { id: 154845, number: 14, name: "Nico", surname: "González", backName: "González", img: url + 'nico_gonzalez.png', position: "midfielder", games: 37, goals: 2, assists: 2, detailsImg: url + 'nico_gonzalez_details.png' },
  { id: 178542, number: 20, name: "Sergi", surname: "Roberto", backName: "Roberto", img: url + 'sergi_roberto.png', position: "midfielder", games: 316, goals: 12, assists: 37, detailsImg: url + 'sergi_roberto_details.png' },
  { id: 135644, number: 21, name: "Frenkie", surname: "de Jong", backName: "Jong", img: url + 'frenkie_deJong.png', position: "midfielder", games: 140, goals: 13, assists: 15, detailsImg: url + 'frenkie_deJong_details.png' },
  { id: 112374, number: 0, name: "Franck", surname: "Kessié", backName: "Kessié", img: url + 'frank_kessie.png', position: "midfielder", games: 0, goals: 0, assists: 0, detailsImg: url + 'frank_kessie_details.png' },
  // Forwards
  { id: 821346, number: 7, name: "Ousmane", surname: "Dembélé", backName: "Dembélé", img: url + 'ousmane_dembele.png', position: "forward", games: 150, goals: 32, assists: 33, detailsImg: url + 'ousmane_dembele_details.png' },
  { id: 894186, number: 9, name: "Memphis", surname: "Depay", backName: "Depay", img: url + 'memphis_depay.png', position: "forward", games: 38, goals: 13, assists: 2, detailsImg: url + 'memphis_depay_details.png' },
  { id: 829687, number: 10, name: "Ansu", surname: "Fati", backName: "Fati", img: url + 'ansu_fati.png', position: "forward", games: 58, goals: 19, assists: 3, detailsImg: url + 'ansu_fati_details.png' },
  { id: 845665, number: 12, name: "Martin", surname: "Braithwaite", backName: "Braithwaite", img: url + 'martin_braithwaite.png', position: "forward", games: 58, goals: 10, assists: 4, detailsImg: url + 'martin_braithwaite_details.png' },
  { id: 823945, number: 19, name: "Ferran", surname: "Torres", backName: "Torres", img: url + 'ferran_torres.png', position: "forward", games: 26, goals: 7, assists: 6, detailsImg: url + 'ferran_torres_details.png' },
  { id: 856755, number: 25, name: "Pierre-Emerick", surname: "Aubameyang", backName: "Aubameyang", img: url + 'pierreEmerick_aubameyang.png', position: "forward", games: 23, goals: 13, assists: 1, detailsImg: url + 'pierreEmerick_aubameyang_details.png' },
  // Coach
  { id: 579849, number: 0, name: "Xavi", surname: "", backName: "Xavi", img: url + 'xavi_hernandez.png', position: "coach", games: 0, goals: 0, assists: 0 },
];

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

  getPlayerById(id: number) {
    return equipo.find((player) => {
      if (player.id == id) {
        return player;
      }
    })
  }

  getGoalkeepers() {
    return equipo.filter((player) => {
      if (player.position === "goalkeeper") {
        return player;
      }
    })
  }

  getDefenders() {
    return equipo.filter((player) => {
      if (player.position === "defender") {
        return player;
      }
    })
  }

  getMidfielders() {
    return equipo.filter((player) => {
      if (player.position === "midfielder") {
        return player;
      }
    })
  }

  getForwards() {
    return equipo.filter((player) => {
      if (player.position === "forward") {
        return player;
      }
    })
  }

  getCoach() {
    return equipo.filter((coach) => {
      if (coach.position === "coach") {
        return coach;
      }
    })
  }
}
