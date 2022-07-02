import { Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit  {

  @ViewChild('tw') typewriterElement;
  darkMode: boolean = false;
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  
  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
    this.darkMode$.subscribe(data => this.darkMode = data);
  }

  ngAfterViewInit() {
    // use different targets depending on whether it is dark mode or light mode
    const targetLight = this.typewriterElement.nativeElement;
    const targetDark = document.getElementById('twdark');

    const writerLight = new Typewriter(targetLight, {
      loop: true,
      cursorColor: '#D2E6D6',
      typeColor: 'white',
      deleteSpeed: 25,
      typeSpeed: 150,
      blinkSpeed: 230,
      animateCursor: true,
    })

    writerLight
    .strings(
      1500,
      "a programmer. 💻", 
      "passionate about UI/UX. ✏️", 
      "an advocate for women in STEM. 💖",
      "a lifelong learner. 📚",
      "a Studio Ghibli enthusiast. 🧸",
      "a nature lover. 🌲", 
      "happy to meet you! 👋🏻"
    ).start()

    const writerDark = new Typewriter(targetDark, {
      loop: true,
      deleteSpeed: 25,
      typeSpeed: 150,
      blinkSpeed: 230,
      animateCursor: true,
    })

    writerDark
    .strings(
      1500,
      "a programmer. 💻", 
      "passionate about UI/UX. ✏️", 
      "an advocate for women in STEM. 💖",
      "a lifelong learner. 📚",
      "a Studio Ghibli enthusiast. 🧸",
      "a nature lover. 🌲", 
      "happy to meet you! 👋🏻"
    ).start()
  }

  public setDarkMode(darkModeOn: boolean):void {
    this.darkMode = darkModeOn;
  }
}
