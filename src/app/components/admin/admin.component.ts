import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [AdminService],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  aggregateData: any;
  players: any;
  aggregatedByDate: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAggregateData().subscribe(response => {
      this.aggregateData = response;
    });

    this.adminService.getPlayers().subscribe(response => {
      this.players = response;
    });

    this.adminService.getAggregatedByDate().subscribe(response => {
      this.aggregatedByDate = response;
    });
  }
}