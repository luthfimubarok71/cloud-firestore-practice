const {Firestore} = require("@google-cloud/firestore");

const db = new Firestore();

async function store_data() {
  // membuat collection root-level
  const doctorCollections = db.collection('dokter');
  console.log("Collections 'dokter' berhasil dibuat.");
  
  // membuat dokumen: Dokter Eros
  const erosDoc = await doctorCollections.doc("Docter Eros");
  console.log("Dokumen atas nama Dokter Eros berhasil dibuat.");
  
  // menambahkan data pribadi
  const profileEros = {
    nama: "dr. Eros",
    keahlian: "Dokter Kulit",
    almamater: "Universitas A"
  }

  await erosDoc.set(profileEros);
  console.log("Data berhasil ditambahkan ke dokumen Eros.");
  
  // membuat subcollection: konsultasi
  const erosSubcollections = erosDoc.collection('Konsultasi');
  console.log("Subcollection konsultasi berhasil dibuat.");
  
  // menambahkan data ke
  const historyConsultations = {
    nama_pasien: {
      depan: "Antony",
      belakang: "Gunawan",
    },
    waktu_konsultasi: Date.now().toString()
  }

  await erosSubcollections.doc("Antony").set(historyConsultations);
  console.log("Data berhasil ditambahkan.");
  
};

store_data().catch(console.error);