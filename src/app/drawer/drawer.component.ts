import { Component, OnInit } from '@angular/core';
import { MDCRipple } from '@material/ripple';
// import { MDCList } from '@material/list';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCDrawer} from "@material/drawer";


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    // const topAppBar = new MDCTopAppBar(topAppBarElement);  
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    
    const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
          topAppBar.setScrollTarget(document.getElementById('main-content'));
          topAppBar.listen('MDCTopAppBar:nav', () => {
            drawer.open = !drawer.open;
          });

    const mdcNavLinks = [].map.call(document.querySelectorAll('.mdc-list-item'), function(element) {
      return new MDCRipple(element)
    });
    
  }

}
