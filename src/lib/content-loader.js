import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Menentukan path ke direktori konten
const contentDirectory = path.join(process.cwd(), "_content");

/**
 * Mengambil semua data post dari subdirektori tertentu (misal: 'blog' atau 'services')
 * @param {string} subdirectory - Nama folder di dalam '_content'
 * @returns {Array} - Daftar semua post/data yang sudah di-parse
 */
export function getAllContent(subdirectory) {
  const fullPath = path.join(contentDirectory, subdirectory);

  // Cek apakah direktori ada
  if (!fs.existsSync(fullPath)) {
    console.error(`Direktori tidak ditemukan: ${fullPath}`);
    return [];
  }

  const fileNames = fs.readdirSync(fullPath);

  const allContentData = fileNames.map((fileName) => {
    // Hapus ekstensi .md dari nama file untuk mendapatkan slug
    const slug = fileName.replace(/\.md$/, "");

    // Baca file markdown sebagai string
    const fileContents = fs.readFileSync(path.join(fullPath, fileName), "utf8");

    // Gunakan gray-matter untuk mem-parse frontmatter
    const matterResult = matter(fileContents);

    // Gabungkan data dengan slug
    return {
      slug,
      ...matterResult.data,
    };
  });

  // Urutkan post berdasarkan tanggal jika ada, atau biarkan urutan default
  return allContentData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * Mengambil data konten tunggal berdasarkan slug-nya
 * @param {string} subdirectory - Nama folder di dalam '_content'
 * @param {string} slug - Slug dari konten yang ingin diambil
 * @returns {Object} - Data konten tunggal beserta isi (content)
 */
export function getContentBySlug(subdirectory, slug) {
  const fullPath = path.join(contentDirectory, subdirectory, `${slug}.md`);

  // Cek apakah file ada
  if (!fs.existsSync(fullPath)) {
    console.error(`File tidak ditemukan: ${fullPath}`);
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Gunakan gray-matter untuk mem-parse frontmatter dan content
  const matterResult = matter(fileContents);

  return {
    slug,
    content: matterResult.content, // Ini adalah isi dari markdown setelah frontmatter
    ...matterResult.data,
  };
}
