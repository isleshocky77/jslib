import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

import { I18nService } from "jslib-common/abstractions/i18n.service";

type BannerTypes = "premium" | "info" | "warning" | "danger";

const defaultIcon: Record<BannerTypes, string> = {
  premium: "bwi-star",
  info: "bwi-info-circle",
  warning: "bwi-exclamation-triangle",
  danger: "bwi-error",
};

const defaultI18n: Partial<Record<BannerTypes, string>> = {
  warning: "warning",
  danger: "error",
};

@Component({
  selector: "bit-banner",
  templateUrl: "./banner.component.html",
})
export class BannerComponent implements OnInit {
  @Input() type: BannerTypes = "info";
  @Input() icon: string;
  @Input() title: string;
  @Input() useAlertRole = true;

  @Output() onClose = new EventEmitter<void>();

  constructor(private i18nService: I18nService) {}

  ngOnInit(): void {
    this.icon ??= defaultIcon[this.type];
    if (this.title == null && defaultI18n[this.type] != null) {
      this.title = this.i18nService.t(defaultI18n[this.type]);
    }
  }

  get bannerClass() {
    switch (this.type) {
      case "danger":
        return "tw-bg-danger-500";
      case "info":
        return "tw-bg-info-500";
      case "premium":
        return "tw-bg-success-500";
      case "warning":
        return "tw-bg-warning-500";
    }
  }
}
