import { Component } from '@angular/core';
import {NgxExtendedPdfViewerModule} from "ngx-extended-pdf-viewer";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  pdfSrc = '/Resume.pdf'
}
