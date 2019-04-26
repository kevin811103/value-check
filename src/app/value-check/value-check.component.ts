import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value-check',
  templateUrl: './value-check.component.html',
  styleUrls: ['./value-check.component.css']
})
export class ValueCheckComponent implements OnInit {
  
  dataList=["信仰", "愛", "改變", "成就", "仁慈", "興奮", "誠信", "藝術", "平衡", "社群", "歡笑", "快樂", "影響他人", "安全感憐憫心", "有意義的工作", "金錢", "幫助他人", "自然", "家人", "自尊", "服務他人 ", "教導", "穩定 ", "領導他人", "獨處", "專業能力", "時間旅行 ", "誠實", "連結", "知識 ", "休閒娛樂", "被認同創造改變", "貢獻 ", "有競爭力", "啟發", "擁有財務保障", "選擇", "自由", "親密關係", "成功", "冒險", "獨立", "權力", "發揮全部潛力", "智慧", "分享", "能力", "喜悦", "有效率", "成長", "冒險", "和平", "傑出", "傳統", "愉悅", "果決", "健康", "學習", "樂趣", "熱情", "舒適", "信任", "秩序", "名留青史", "友誼", "正直", "有創意", "歸屬感", "進步", "關係", "才智", "承擔風險"]

  constructor() { }

  ngOnInit() {
  }

}
