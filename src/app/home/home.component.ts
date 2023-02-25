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
  greetings: string[] = ['Hello', 'Hey', '你好', 'Hi', 'Bonjour', '안녕']
  greeting:string = '';
  
  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
    this.darkMode$.subscribe(data => this.darkMode = data);
    this.greeting = this.greetings[Math.floor(Math.random() * this.greetings.length)];
  }

  ngAfterViewInit() {
    // use different targets depending on whether it is dark mode or light mode
    const targetLight = this.typewriterElement.nativeElement;
    const targetDark = document.getElementById('twdark');

    const writerLight = new Typewriter(targetLight, {
      loop: true,
      cursorColor: '#D2E6D6',
      typeColor: '#e1e1e5',
      deleteSpeed: 30,
      typeSpeed: 100,
      blinkSpeed: 230,
      animateCursor: true,
    })

    writerLight
    .strings(
      1500,
      "a programmer and a lifelong learner. 💻", 
      "a nature lover and matcha addict. 🍵",
      "passionate about development and design. ✏️", 
      "working to cultivate a more inclusive and diverse tech community. 💖",
      "excited for new homes in tech. 📚",
      "inspired by people that love what they do. ⭐",
      "happy to meet you! 👋🏻"
    ).start()

    const writerDark = new Typewriter(targetDark, {
      loop: true,
      typeColor: '#313638',
      deleteSpeed: 30,
      typeSpeed: 100,
      blinkSpeed: 230,
      animateCursor: true,
    })

    writerDark
    .strings(
      1500,
      "a programmer and a lifelong learner. 💻", 
      "a nature lover and matcha addict. 🍵",
      "passionate about development and design. ✏️", 
      "working to cultivate a more inclusive and diverse tech community. 💖",
      "excited for new homes in tech. 📚",
      "inspired by people that love what they do. ⭐",
      "happy to meet you! 👋🏻"
    ).start()
  }

  public setDarkMode(darkModeOn: boolean):void {
    this.darkMode = darkModeOn;
  }
}
