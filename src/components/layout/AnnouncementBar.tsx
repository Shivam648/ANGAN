import { site } from "../../data/site";

export function AnnouncementBar() {
  return (
    <div className="announcement">
      <div className="container-editorial">
        <p className="announcement-inner">
          <span className="status-dot" aria-hidden="true" />
          {site.announcement}
        </p>
      </div>
    </div>
  );
}
