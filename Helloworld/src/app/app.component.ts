import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello World';
  imgUrl = 'https://imgs.search.brave.com/TKWOH1gzjT880iA72cMl2zTUFjhnIDwoSys4kjasSME/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMueW91cnN0b3J5/LmNvbS9jcy9pbWFn/ZXMvY29tcGFuaWVz/L2xvZ28tMTU4NjQx/OTU3NDMzNy5qcGc_/Zm09YXV0byZhcj0x/OjEmbW9kZT1maWxs/JmZpbGw9c29saWQm/ZmlsbC1jb2xvcj1m/ZmYmZm9ybWF0PWF1/dG8mdz0zODQmcT03/NQ';
  url = 'https://www.bridgelabz.com/';
  userName: string = "";
  nameError : String = "";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz!";
  }

  onClick($event: any) {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onInput($event : any) {
    console.log("Change Event occurred!", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\a]{2,}$');

    if(nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }

    this.nameError = "Name is incorrect!";
  }
}
