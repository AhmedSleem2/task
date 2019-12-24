import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private url1='https://jsonplaceholder.typicode.com/posts'
  products:any []
private url='https://5bcce576cf2e850013874767.mockapi.io/task/categories';
  constructor( private http: Http) {
http.get(this.url)
.subscribe(response=>{
this.products=response.json();
})
   }
   createPost(input:HTMLInputElement)
   {
     let post :any={title:input.value}
     input.value='';
     this.http.post(this.url1,JSON.stringify(post)).subscribe(response=>{
       post.id=response.json().id;
       this.products.splice(0,0,post);
      });

      
   }

  //  updatePost(post){
  //    this.http.put(this.url1 +'/'+post.id,JSON.stringify(post))
  //    .subscribe(response=>{
  //      console.log(response.json());
       
  //    })
        
  // }



  ngOnInit() {
  }

}
