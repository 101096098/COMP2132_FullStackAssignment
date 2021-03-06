import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../../controller/service/player.service'
import { Player } from '../../model/player';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { GameService } from '../../controller/service/game.service'
import { Game } from '../../model/game'
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-admin-editplayer',
  templateUrl: './admin-editplayer.component.html',
  styleUrls: ['./admin-editplayer.component.scss'],
  providers:[PlayerService, GameService]
})
export class AdminEditplayerComponent{

  player = {} ;
  selectStatus = ['Available', 'Unavailable']
  adminEditPlayer: FormGroup;

  constructor(private playerService : PlayerService, 
    private router: Router, 
    private route: ActivatedRoute,
    private gameService : GameService,
    private fb: FormBuilder) { 
      this.adminEditPlayer =  new FormGroup({
        player_name: new FormControl(),
        rank: new FormControl(),
        score :new FormControl(),
        time :new FormControl(),
        favorite_game: new FormControl(),
        status: new FormControl(),

      })
    }
  

  statusChoice = ['Available' , 'Unavailable']
  ngOnInit() {
    this.getListToUpdate(this.route.snapshot.params['id']);
    this.refreshGameList();
    //this.updatePlayerList(this.route.snapshot.params['id'])
    this.fb.group({
      selectStatus:['Select a status']
    })
  }

  getListToUpdate(id) {
    this.playerService.getPlayerEdit(id).subscribe( res => {
      this.player = res;
    })
  }

  refreshGameList() {
    this.gameService.getGameList().subscribe((res) => {
      this.gameService.games = res as Game[];
    }
    );
  }

  onSubmit(form: NgForm) {
    this.playerService.getPlayerUpdated(form.value).subscribe( res => {
      this.router.navigate(['/admin-gamelist']);
      }
    )   
   
 }
}
