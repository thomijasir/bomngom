import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Detect locale from URL path prefix. Example: /en => 'en', otherwise default 'id'
const pathLang = (() => {
  if (typeof window === 'undefined') return 'id';
  const seg = window.location.pathname.split('/').filter(Boolean)[0];
  return seg === 'en' ? 'en' : seg === 'cn' ? 'cn' : seg === 'ta' ? 'ta' : 'id';
})();

const resources = {
  id: {
    translation: {
      landing: {
        inviteeSmall: 'Kepada Yth. Bapak/Ibu/Saudara/i',
        invitee: 'Tamu Undangan',
        openInvitation: 'BUKA UNDANGAN',
        theWeddingOf: 'THE WEDDING OF',
      },
      header: {
        inviteeSmall: 'Kepada Yth. Bapak/Ibu/Saudara/i',
        invitee: 'Tamu Undangan',
      },
      greeting: {
        salutation: 'Assalamualaikum Warahmatullahi Wabarakatuh',
        inviteText:
          "Dengan memohon rahmat dan ridha Allah Subhanahu Wa Ta'ala, kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada akad kami.",
        date: '22 . 09 . 2025',
      },
      verse: {
        text:
          '“Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang.”',
        source: 'Q.S. Ar-Rum : 21',
      },
      countdown: {
        title: 'Hitung Mundur',
        days: 'Hari',
        hours: 'Jam',
        minutes: 'Menit',
        seconds: 'Detik',
        footer: 'Menuju 22 September 2025 pukul 08.00 WIB',
      },
      couple: {
        title: 'Pengantin',
        brideParents: 'Putri pertama dari Bapak Sambodo dan Ibu Devie',
        groomParents: 'Putra pertama dari Bapak Agus dan Ibu Ineke',
        brideTag: 'The Bride',
        groomTag: 'The Groom',
      },
      story: {
        title: 'Kisah Kami',
        timeline: [
          {
            year: '2023',
            text:
              'Awal pertemuan Thomi dan Yasmin di kedai kopi Eyckman dan saling mengenal. Karena keselarasan, akhirnya memutuskan untuk menjalin hubungan.',
          },
          {
            year: '2024',
            text:
              'Tahun 2024 adalah tahun yang menantang karena Thomi harus melanjutkan pekerjaannya di Singapura, sehingga menjalani LDR.',
          },
          {
            year: '2025',
            text:
              'Memutuskan untuk menyegerakan akad nikah kami, untuk mempersiapkan perjalanan yang diridhai Allah.',
          },
        ],
      },
      event: {
        title: 'Akad Nikah Kami',
        date: 'Senin, 22 September 2025',
        time: '08.00 WIB',
        venue: 'Al-Ukhuwwah Great Mosque',
        address: 'Jalan Wastukencana No.27, Bandung',
        addToCalendar: 'Tambah ke Google Calendar',
        maps: 'Google Maps',
      },
      gallery: {
        title: 'Galeri',
        itemAlt: 'Galeri {{index}}',
      },
      gift: {
        title: 'Kirim Hadiah',
        text: 'Kehadiran Bapak/Ibu/Saudara/i merupakan hadiah terindah.',
      },
      closing: {
        title: 'Terima Kasih',
        text1:
          'Menjadi kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i dapat hadir di acara akad nikah kami.',
        text2:
          'Terima kasih atas segala ucapan, doa, dan perhatian yang diberikan. Sampai jumpa di hari akad nikah kami.',
      },
    },
  },
  en: {
    translation: {
      landing: {
        inviteeSmall: 'Dear Sir/Madam',
        invitee: 'Honored Guest',
        openInvitation: 'OPEN INVITATION',
        theWeddingOf: 'THE WEDDING OF',
      },
      header: {
        inviteeSmall: 'Dear Sir/Madam',
        invitee: 'Honored Guest',
      },
      greeting: {
        salutation: 'Peace be upon you',
        inviteText:
          'With the blessings of Allah, we cordially invite you to attend our marriage ceremony.',
        date: '22 . 09 . 2025',
      },
      verse: {
        text:
          '“And among His signs is that He created for you mates from among yourselves so that you may find tranquility in them, and He placed between you affection and mercy.”',
        source: 'Q.S. Ar-Rum : 21',
      },
      countdown: {
        title: 'Countdown',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
        footer: 'Towards 22 September 2025 at 08:00 WIB',
      },
      couple: {
        title: 'Bride & Groom',
        brideParents: 'First daughter of Mr. Sambodo and Mrs. Devie',
        groomParents: 'First son of Mr. Agus and Mrs. Ineke',
        brideTag: 'The Bride',
        groomTag: 'The Groom',
      },
      story: {
        title: 'Our Story',
        timeline: [
          {
            year: '2023',
            text:
              'Thomi and Yasmin first met at Eyckman coffee shop and got to know each other. Finding harmony, they decided to be together.',
          },
          {
            year: '2024',
            text:
              'A challenging year as Thomi continued his work in Singapore, leading to a long-distance relationship.',
          },
          {
            year: '2025',
            text:
              'We decided to hasten our nikah to embark on a journey blessed by Allah.',
          },
        ],
      },
      event: {
        title: 'Our Wedding Ceremony',
        date: 'Monday, 22 September 2025',
        time: '08:00 WIB',
        venue: 'Al-Ukhuwwah Great Mosque',
        address: 'Wastukencana Street No.27, Bandung',
        addToCalendar: 'Add to Google Calendar',
        maps: 'Google Maps',
      },
      gallery: {
        title: 'Gallery',
        itemAlt: 'Gallery {{index}}',
      },
      gift: {
        title: 'Send Gift',
        text: 'Your presence is the greatest gift.',
      },
      closing: {
        title: 'Thank You',
        text1:
          'It would be our pleasure if you could attend our marriage ceremony.',
        text2:
          'Thank you for your wishes, prayers, and attention. See you on our wedding day.',
      },
    },
  },
  cn: {
    translation: {
      landing: {
        inviteeSmall: '尊敬的先生/女士',
        invitee: '贵宾',
        openInvitation: '打开邀请',
        theWeddingOf: '我们的婚礼',
      },
      header: {
        inviteeSmall: '尊敬的先生/女士',
        invitee: '贵宾',
      },
      greeting: {
        salutation: '愿真主赐你平安',
        inviteText: '蒙真主恩典，诚邀您参加我们的婚礼。',
        date: '22 . 09 . 2025',
      },
      verse: {
        text:
          '他为你们从自身创造配偶，使你们获得安宁，并在你们之间安置爱与慈悯。',
        source: '古兰经·罗马章 30:21',
      },
      countdown: {
        title: '倒计时',
        days: '天',
        hours: '小时',
        minutes: '分钟',
        seconds: '秒',
        footer: '距离 2025年9月22日 08:00（WIB）',
      },
      couple: {
        title: '新郎新娘',
        brideParents: '长女：Sambodo（林博达） 与 Devie（德雅茗）',
        groomParents: '长子：Agus 先生 与 Ineke 女士',
        brideTag: '新娘',
        groomTag: '新郎',
      },
      story: {
        title: '我们的故事',
        timeline: [
          {
            year: '2023',
            text: '在 Eyckman 咖啡店相识，慢慢了解，因相互吸引走到一起。',
          },
          {
            year: '2024',
            text: '经历远距离：Thomi 在新加坡工作，我们共同面对挑战。',
          },
          {
            year: '2025',
            text: '我们决定结婚，携手开启被真主祝福的新生活。',
          },
        ],
      },
      event: {
        title: '婚礼仪式',
        date: '星期一，2025年9月22日',
        time: '08:00 WIB',
        venue: 'Al-Ukhuwwah 大清真寺',
        address: 'Bandung，Wastukencana 街 27号',
        addToCalendar: '添加到日历',
        maps: '查看地图',
      },
      gallery: {
        title: '相册',
        itemAlt: '照片 {{index}}',
      },
      gift: {
        title: '赠礼',
        text: '您的到来就是最好的礼物。',
      },
      closing: {
        title: '感谢',
        text1: '若您能出席我们的婚礼，我们将不胜荣幸。',
        text2: '感谢您的祝福与关怀，婚礼见。',
      },
    },
  },
  ta: {
    translation: {
      landing: {
        inviteeSmall: 'அன்பிற்குரிய ஐயா/அம்மணி',
        invitee: 'மதிப்பிற்குரிய விருந்தினர்',
        openInvitation: 'அழைப்பை திறக்க',
        theWeddingOf: 'திருமணம்',
      },
      header: {
        inviteeSmall: 'அன்பிற்குரிய ஐயா/அம்மணி',
        invitee: 'மதிப்பிற்குரிய விருந்தினர்',
      },
      greeting: {
        salutation: 'அஸ்ஸலாமு அலைக்கும்',
        inviteText: 'அல்லாஹ்வின் அருளால், எங்கள் திருமணத்திற்கு உங்களை அன்புடன் அழைக்கிறோம்.',
        date: '22 . 09 . 2025',
      },
      verse: {
        text:
          'உங்களுக்கு உங்களிலிருந்தே துணையரை படைத்தான்; அவர்களிடத்தில் அமைதியை அடைவதற்காக. உங்களுக்குள் அன்பும் கருணையும் வைத்தான்.',
        source: 'குர்ஆன், அர்ரூம் 30:21',
      },
      countdown: {
        title: 'கவுண்டவுன்',
        days: 'நாட்கள்',
        hours: 'மணிநேரம்',
        minutes: 'நிமிடங்கள்',
        seconds: 'வினாடிகள்',
        footer: '2025 செப்டம்பர் 22, காலை 08:00 (WIB) வரை',
      },
      couple: {
        title: 'மணமக்கள்',
        brideParents: 'திரு. Sambodo மற்றும் திருமதி Devie அவர்களின் முதல் மகள்',
        groomParents: 'திரு. Agus மற்றும் திருமதி Ineke அவர்களின் முதல் மகன்',
        brideTag: 'மணமகள்',
        groomTag: 'மணமகன்',
      },
      story: {
        title: 'எங்கள் கதை',
        timeline: [
          {
            year: '2023',
            text: 'Eyckman காபி கடையில் சந்தித்தோம்; பழகி ஒன்றானோம்.',
          },
          {
            year: '2024',
            text: 'தொலைவு உறவு: Thomi சிங்கப்பூரில் வேலை; சவால்களை எதிர்கொண்டோம்.',
          },
          {
            year: '2025',
            text: 'நாங்கள் திருமணம் செய்ய முடிவு செய்தோம்; அல்லாஹ்வின் ஆசீர்வாதத்துடன் புதிய பயணம்.',
          },
        ],
      },
      event: {
        title: 'எங்கள் திருமண விழா',
        date: 'திங்கள், 22 செப்டம்பர் 2025',
        time: '08:00 WIB',
        venue: 'Al-Ukhuwwah பெரிய பள்ளிவாசல்',
        address: 'Wastukencana தெரு எண்.27, பாண்டுங்',
        addToCalendar: 'காலெண்டரில் சேர்க்க',
        maps: 'வரைபடம்',
      },
      gallery: {
        title: 'காட்சியகம்',
        itemAlt: 'புகைப்படம் {{index}}',
      },
      gift: {
        title: 'பரிசு',
        text: 'உங்கள் வருகையே எங்களுக்கு மிகச் சிறந்த பரிசு.',
      },
      closing: {
        title: 'நன்றி',
        text1: 'நீங்கள் வருகை தந்தால் எங்களுக்கு மிகுந்த மகிழ்ச்சி.',
        text2: 'உங்கள் வாழ்த்துகளுக்கும் பிரார்த்தனைகளுக்கும் நன்றி. திருமண நாளில் சந்திப்போம்.',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: pathLang,
  fallbackLng: 'id',
  interpolation: { escapeValue: false },
});

// Set <html lang> for accessibility/SEO
if (typeof document !== 'undefined') {
  const setHtmlLang = (lng) => {
    const lang = lng === 'cn' ? 'zh-CN' : lng;
    document.documentElement.lang = lang;
  };
  setHtmlLang(i18n.language);
  i18n.on('languageChanged', setHtmlLang);
}

export default i18n;
