import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { Bords } from 'src/app/interfaces/bords';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  data: Bords[] = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
      "userId": 1, 
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      },
      {
      "userId": 1,
      "id": 6,
      "title": "dolorem eum magni eos aperiam quia",
      "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
      },
  ]

  mainData = this.data

  tasks = [
    "task1",
    "task2",
    "task3",
    "task4",
    "task5",
    "task6",
  ]

  tasks2 = [
    "task21",
    "task22",
    "task23",
    "task24",
    "task25",
    "tas26",
  ]

  searchKey = ""

  val=0

  constructor() { console.log("!!!!!!hello Constructor") }
  ngOnInit(): void { console.log("@@@@@@hello On Init") }  
  
  ngOnChanges() { console.log("#######on change") } // Out Change

  ngDoCheck() { console.log("$$$$$$$Do Check")}
  ngAfterContentChecked() {console.log("&&&&&&&&&ngAfterContentChecked")}  
  ngAfterViewChecked() {console.log("&&&&&&&&&ngAfterContentChecked")}  

  ngAfterContentInit() { console.log("%%%%%%%%ngAfterContentInit") }

  ngAfterViewInit() { console.log("^^^^^^^^ngAfterViewInit")}


  ngOnDestroy() {console.log("**********ngOnDestroy")}
  

  add() {
    this.val++
  }

  minus() {
    if(this.val>0){
      this.val--
    }
  }

  filterData() {
    this.data = this.mainData.filter(item => item.title.includes(this.searchKey))
  }

  onDrop(event: CdkDragDrop<string []>) {
    if(event.previousContainer === event.container){
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )
    }else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }

}
