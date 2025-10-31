import React, { useState } from "react";
import "./Addresses.css";
import { motion, AnimatePresence } from "framer-motion";
import building from "../../Assets/building.jpg";

const branchData = {
  "Visakhapatnam District": [
    {
      branch: "Central Office",
      address:
        "Head Office, Door No: 58-14-57/2, YSR Sahakara Bhavan, Marripalem, VUDA Layout, Near PF Office, Visakhapatnam – 530009",
      email: "ceo_vsp@apcob.org",
      phone: "0891-2788612",
      mobile: "9989115517",
      ifsc: "APBL0003001",
    },
    {
      branch: "Bheemili",
      address:
        "Door No: 14-10-48, Sivalayam Street, Bheemili, Visakhapatnam – 531163",
      email: "br_bml@vizagdccb.org.in",
      phone: "08933-228086",
      mobile: "9989115527",
      ifsc: "APBL0003003",
    },
    {
      branch: "Dwarakanagar",
      address:
        "Door No:49-24-1, Sriyam PVJ, Madhuranagar, Dwarakanagar, Visakhapatnam – 530016",
      email: "br_dwk@vizagdccb.org.in",
      phone: "0891-2721542",
      mobile: "9989115503",
      ifsc: "APBL0003006",
    },
    {
      branch: "Gajuwaka",
      address:
        "Door No: 12-60-10, Balacheruvu Road, Gajuwaka, Visakhapatnam – 530026",
      email: "br_gwk@vizagdccb.org.in",
      phone: "0891-2548603",
      mobile: "9989115504",
      ifsc: "APBL0003007",
    },
    {
      branch: "Gandhiplace",
      address:
        "Door No:8-1-99, North West Corner of Waltair Main Road, China Waltair Colony, Old CBI Junction, Visakhapatnam – 530017",
      email: "br_gdp@vizagdccb.org.in",
      phone: "0891-2591410",
      mobile: "9989115505",
      ifsc: "APBL0003008",
    },
    {
      branch: "Gopalapatnam",
      address:
        "Door No:11-171, Main Road (Visakhapatnam to Simhachalem Road), Gopalapatnam, Visakhapatnam – 530027",
      email: "br_gpt@vizagdccb.org.in",
      phone: "0891-2788600",
      mobile: "9989115506",
      ifsc: "APBL0003009",
    },
    {
      branch: "Kancharapalem",
      address:
        "Door No: 37-1-11, Sankurupeta, Near Old I.T.I Junction, Kapparada, Kancharapalem to NAD Road, Visakhapatnam – 530007",
      email: "br_kcp@vizagdccb.org.in",
      phone: "0891-2788604",
      mobile: "9989115507",
      ifsc: "APBL0003011",
    },
    {
      branch: "MVP Colony",
      address:
        "Door No:1-68-41, MIG-1, Plot -1A, Sector-3, M.V.P. Colony, Visakhapatnam – 530017",
      email: "br_mvp@vizagdccb.org.in",
      phone: "0891-2788606",
      mobile: "9989115510",
      ifsc: "APBL0003013",
    },
    {
      branch: "Madhurawada",
      address: "Door No:4-46, P.M.Palem, Visakhapatnam – 530048",
      email: "br_mwd@vizagdccb.org.in",
      phone: "0891-2788613",
      mobile: "9989115526",
      ifsc: "APBL0003014",
    },
    {
      branch: "Maharani Peta",
      address:
        "Door No:14-25-11/A, Near Collectrate, Maharanipeta, Visakhapatnam – 530002",
      email: "br_mrpt@vizagdccb.org.in",
      phone: "0891-2788609",
      mobile: "9989115508",
      ifsc: "APBL0003016",
    },
    {
      branch: "Marripalem",
      address:
        "Door No:58-14-57/1, Vuda Layout, NTR Sahakara Bhavan, Marripalem, Visakhapatnam – 530009",
      email: "br_mrpm@vizagdccb.org.in",
      phone: "0891-2788601",
      mobile: "9989115509",
      ifsc: "APBL0003017",
    },
    {
      branch: "Pendurthy",
      address:
        "Door No:17-38, G.S.N Complex, Near Mahila Pragathi Kendram, Main Road, Pendurthy, Visakhapatnam – 531173",
      email: "br_pnd@vizagdccb.org.in",
      phone: "0891-2548601",
      mobile: "9989115524",
      ifsc: "APBL0003021",
    },
    {
      branch: "Railway New Colony",
      address:
        "Door No:43-9-197, Plot No:18, Subbalakshminagar, Main Road, Opp. Sreekanya Theater, Rly. New Colony, Visakhapatnam – 530016",
      email: "br_rnc@vizagdccb.org.in",
      phone: "0891-2788605",
      mobile: "9989115514",
      ifsc: "APBL0003022",
    },
    {
      branch: "Seethammadhara",
      address:
        "Door No:50-44-13/1, Respuvanipalem Village, P.N.T Colony area, Gandhinagaram, Visakhapatnam – 530013",
      email: "br_sdr@vizagdccb.org.in",
      phone: "0891-2788610",
      mobile: "9989115512",
      ifsc: "APBL0003024",
    },
    {
      branch: "Sriharipuram",
      address:
        "Door No:64-1-50/1, Main Road, Gullapalem Village, Sriharipuram, Visakhapatnam – 530011",
      email: "br_srprm@vizagdccb.org.in",
      phone: "0891-2706454",
      mobile: "9989115513",
      ifsc: "APBL0003025",
    },
    {
      branch: "Steel City",
      address:
        "Shop No:36, Shopping Complex, Sector-V, Ukkunagaram, Visakhapatnam – 530032",
      email: "br_stc@vizagdccb.org.in",
      phone: "0891-2548602",
      mobile: "9989115516",
      ifsc: "APBL0003026",
    },
    {
      branch: "Visakhapatnam",
      address:
        "Door No:26-15-48, Main Road, Visakhapatnam – 530001",
      email: "br_vspmain@vizagdccb.org.in",
      phone: "0891-2788607",
      mobile: "9989115515",
      ifsc: "APBL0003027",
    },
    {
      branch: "Visalakshinagar",
      address:
        "Door No:10-285/1, Plot No:27, Chinagaddili, V.L. Nagar, Visakhapatnam – 530043",
      email: "br_vln@vizagdccb.org.in",
      phone: "0891-2788608",
      mobile: "9989115502",
      ifsc: "APBL0003028",
    },
    {
      branch: "Padmanabham",
      address:
        "Door No:2-54, Main Road, Padmanabham, Visakhapatnam – 531219",
      email: "br_pdm@vizagdccb.org.in",
      phone: "08933-294788",
      mobile: "8008322664",
      ifsc: "APBL0003033",
    },
    {
      branch: "Anandhapuram",
      address:
        "Door No:8-71, Opposite Sachivalayam, Anandapuram Village & Mandal, Visakhapatnam – 530052",
      email: "br_andp@vizagdccb.org.in",
      phone: "—",
      mobile: "9121333478",
      ifsc: "APBL0003032",
    },
  ],

  "Anakapalli District": [
    {
      branch: "Anakapalli",
      address:
        "Door No: 3-7-22, Woodpeta Main Road, Opp: MR Office, Anakapalli District – 531001",
      email: "br_akp@vizagdccb.org.in",
      phone: "08924-222545",
      mobile: "9989115548",
      ifsc: "APBL0003002",
    },
    {
      branch: "Chodavaram",
      address:
        "Door No: 18-108, Co-Operative Colony, Chodavaram Mandal, Anakapalli District – 531036",
      email: "br_cdm@vizagdccb.org.in",
      phone: "08934-245398",
      mobile: "9989115530",
      ifsc: "APBL0003004",
    },
    {
      branch: "Devarapalli",
      address:
        "Door No: 2-10, Main Road, Deverapalli to Kothavalasa Road, Devarapalli, Anakapalli District – 531030",
      email: "br_devrp@vizagdccb.org.in",
      phone: "08934-248245",
      mobile: "9989115529",
      ifsc: "APBL0003005",
    },
    {
      branch: "K Kotapadu",
      address:
        "Door No:6-58/4, Main Road, K.Kotapadu Village & Mandal, Anakapalli District – 531034",
      email: "br_kkp@vizagdccb.org.in",
      phone: "08934-241228",
      mobile: "9989115528",
      ifsc: "APBL0003010",
    },
    {
      branch: "Kotaurtla",
      address:
        "Main Road, Kotavuratla, Anakapalli District – 531085",
      email: "br_kut@vizagdccb.org.in",
      phone: "08932-247500",
      mobile: "9866695638",
      ifsc: "APBL0003012",
    },
    {
      branch: "Madugula",
      address: "Main Road, Madugula, Anakapalli District – 531027",
      email: "br_mdl@vizagdccb.org.in",
      phone: "08934-224588",
      mobile: "9989115531",
      ifsc: "APBL0003015",
    },
    {
      branch: "Narsipatnam",
      address:
        "Door No:1-90/10, Ground Floor, PVR Complex, Narasipatnam, Anakapalli District – 531116",
      email: "br_nrpm@vizagdccb.org.in",
      phone: "08932-224262",
      mobile: "9989115532",
      ifsc: "APBL0003018",
    },
    {
      branch: "Payakarapeta",
      address:
        "Door No:4-27, Main Road, Payakaraopeta Village & Mandal, Anakapalli District – 531126",
      email: "br_prp@vizagdccb.org.in",
      phone: "08854-256616",
      mobile: "9989115549",
      ifsc: "APBL0003020",
    },
    {
      branch: "Ravikamatham",
      address:
        "Door No:1-174, Main Road, Ravikamatham V&M, Anakapalli District – 531025",
      email: "br_rvkm@vizagdccb.org.in",
      phone: "08934-226774",
      mobile: "9989502565",
      ifsc: "APBL0003023",
    },
    {
      branch: "Yellamanchili",
      address:
        "Door No: 1-1, Beside Ayyappa Swamy Temple, Main Road, Yellamanchili, Anakapalli District – 531055",
      email: "br_ylm@vizagdccb.org.in",
      phone: "08931-231944",
      mobile: "9989115547",
      ifsc: "APBL0003029",
    },
    {
      branch: "Adduroad",
      address:
        "Door No: 2-476, Ward No:4, Old Main Road, Thimmapuram, S.Rayavaram Mandal, Anakapalli District – 531083",
      email: "br_adr@vizagdccb.org.in",
      phone: "08931-227235",
      mobile: "9989115534",
      ifsc: "APBL0003030",
    },
    {
      branch: "Atchutapuram",
      address:
        "Door No: 3-29, Pudimadaka Road, Atchutapuram Mandal, Anakapalli District – 531003",
      email: "br_atc@vizagdccb.org.in",
      phone: "08924-253566",
      mobile: "9121222886",
      ifsc: "APBL0003031",
    },
  ],

  "Alluri Seetharamaraju District": [
    {
      branch: "Paderu",
      address:
        "Main Road, Door No: A9, Near Petrol Bunk, Opp College Ground, Alluri Seetharamaraju District – 531024",
      email: "br_pdr@vizagdccb.org.in",
      phone: "08935-250215",
      mobile: "9494148049",
      ifsc: "APBL0003019",
    },
  ],
};

const Addresses = () => {
  const [openDistrict, setOpenDistrict] = useState(null);

  const toggleDistrict = (district) => {
    setOpenDistrict(openDistrict === district ? null : district);
  };

  return (
    <section
      className="addresses-section"
      style={{ backgroundImage: `url(${building})` }}
      id="addresses"
    >
      <div className="addresses-overlay">
        <div className="addresses-content">
          <h2 className="addresses-title">ADDRESSES OF BRANCHES</h2>

          {Object.entries(branchData).map(([district, branches], idx) => (
            <div className="district-block" key={idx}>
              <motion.div
                className="district-header"
                onClick={() => toggleDistrict(district)}
                whileHover={{ scale: 1.02 }}
              >
                <h3>{district}</h3>
                <motion.span
                  animate={{ rotate: openDistrict === district ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▶
                </motion.span>
              </motion.div>

              <AnimatePresence>
                {openDistrict === district && (
                  <motion.div
                    className="district-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="addresses-table-container">
                      <table className="addresses-table">
                        <thead>
                          <tr>
                            <th>Sl. No.</th>
                            <th>Branch Name</th>
                            <th>Branch Address</th>
                            <th>Post Code</th>
                            <th>Phone No</th>
                            <th>Mobile No</th>
                            <th>IFSC Code</th>
                          </tr>
                        </thead>
                        <tbody>
                          {branches.map((item, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{item.branch}</td>
                              <td>{item.address}</td>
                              <td>
                                {item.address.match(/\d{6}$/)
                                  ? item.address.match(/\d{6}$/)[0]
                                  : "—"}
                              </td>
                              <td>{item.phone}</td>
                              <td>{item.mobile}</td>
                              <td>{item.ifsc}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Addresses;
