import { Component } from '@angular/core';

// Decorator:
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      username: 'nature',
      content: 'Awesome tree seen during hike.',
      imageUrl: 'assets/tree.jpeg',
    },
    {
      title: 'Snowy Mountain',
      username: 'mountain_lover',
      content: 'Pic of a snowy mountain!',
      imageUrl: 'assets/mountain.jpeg',
    },
    {
      title: 'Mountain Biking',
      username: 'biking99',
      content: 'Had a lot of fun during biking.',
      imageUrl: 'assets/biking.jpeg',
    },
  ];
}
