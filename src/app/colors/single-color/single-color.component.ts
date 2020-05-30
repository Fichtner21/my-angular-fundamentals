import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColorsService } from '../colors.service';
import { Color } from '../model/color';

@Component({
  selector: 'app-single-color',
  templateUrl: './single-color.component.html',
  styleUrls: ['./single-color.component.scss']
})
export class SingleColorComponent implements OnInit, OnDestroy {
  public color: Color;
  public errorMessage: string;

  constructor(private activatedRoute: ActivatedRoute, private colorsService:ColorsService) {
    console.log(activatedRoute);
  }

  async ngOnInit(): Promise<void> {
    console.log('ngOnInit');
    const id: string = this.activatedRoute.snapshot.params.id;
    const colorId: number = Number.parseInt(id, 10);

    this.color = await this.colorsService.getSingleColor(colorId);

    //this.colorName = color.name;
  }

  public ngOnDestroy(): void{
    console.log('ngOnDestroy');
  }
}

//injection pool -> co się dzieje pod spodem ActiavtedRoute
//const r = new ActivatedRoute();
//const c = new SingleColorComponent(r);