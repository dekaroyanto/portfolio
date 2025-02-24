import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineMapsHomeWork } from "react-icons/md";

export const Timeline = () => {
  return (
    <VerticalTimeline>
      {/* CV FIRMOS */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(10, 61, 89)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 89, 134)" }}
        date="Juli 2023 - September 2023"
        iconStyle={{ background: "rgb(18, 107, 155)", color: "#fff" }}
        icon={<MdOutlineMapsHomeWork />}
      >
        <h3 className="vertical-timeline-element-title mb-2">
          Web Development - Intern
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          CV FIRMOS | Purbalingga, Jawa Tengah
        </h4>
        <ul className="list-disc">
          <li>
            Merancang database sistem arsip pelanggan dan monitoring pengiriman
            pesanan
          </li>
          <li>Merancang tampilan antarmuka untuk aplikasi internal. </li>
          <li>Membuatdesain spanduk sesuai permintaan pelanggan</li>
        </ul>
      </VerticalTimelineElement>
      {/* END CV FIRMOS */}

      {/* PT TRI */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(10, 61, 89)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 89, 134)" }}
        date="Oktober 2023 - Februari 2024"
        iconStyle={{ background: "rgb(18, 107, 155)", color: "#fff" }}
        icon={<MdOutlineMapsHomeWork />}
      >
        <h3 className="vertical-timeline-element-title mb-2">
          IT APPLICATION - Intern
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          PT TRANS RETAIL INDONESIA | Jakarta
        </h4>
        <ul className="list-disc">
          <li>
            Mengembangkan API untuk menghubungkan aplikasi backend dengan
            frontend.
          </li>
          <li>
            Mengimplementasikan desain untuk aplikasi internal dan nasional.{" "}
          </li>
          <li>
            Mengintegrasikan API agar aplikasi dapat digunakan secara dinamis.
          </li>
          <li>
            Bekerja sama dengan tim dalam menyelesaikan tugas yang kompleks.
          </li>
        </ul>
      </VerticalTimelineElement>
      {/* END PT TRI */}

      {/* PT COLUMBUS */}
      {/* <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(10, 61, 89)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 89, 134)" }}
        date="Juli 2023 - September 2023"
        iconStyle={{ background: "rgb(18, 107, 155)", color: "#fff" }}
        icon={<MdOutlineMapsHomeWork />}
      >
        <h3 className="vertical-timeline-element-title mb-2">
          WEB DEVELOPER- Intern
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          PT COLUMBUS | Cirebon
        </h4>
        <ul className="list-disc">
          <li>Merancang aplikasi untuk perhitungan gaji secara otomatis</li>
          <li>
            Merancang aplikasi sistem pendukung keputusan untuk seleksi karyawan
            baru.
          </li>
          <li>Input dan rekap data gaji karyawan.</li>
        </ul>
      </VerticalTimelineElement> */}
      {/* END PT COLUMBUS */}
    </VerticalTimeline>
  );
};
