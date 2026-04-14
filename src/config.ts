/* ==========================================
   Birthday Surprise Website Configuration

   Edit this file to customize the website
   for your loved one!
   ========================================== */

export const config = {
  /* Name Verification Gate */
  recipientName: "قمري", // required name to enter
  nameHint: '6 letters, starts with "ق"', // hint on wrong name

  /* Section Headings */
  soloGalleryTitle: "✨ My Moon's Birthday ✨", // solo gallery title
  messageTitle: "To My Favorite Person", // letter section title
  footerText: "Made with 💗 your friend", // footer text

  /* Button Labels */
  buttons: {
    hero: "هل انتِ مستعدة لمفاجأتي الصغيرة؟", // hero/landing button
    soloGallery: "تريدي أن تري المزيد؟", // solo gallery button
  },

  /* Together Gallery (Optional) */
  togetherGallery: {
    enabled: true, // toggle together gallery
    title: "💕 My best friend 💕", // together gallery title
    buttonText: "....في حاجة أخيرة", // together gallery button
  },

  /* Birthday Message: Each string is a paragraph */
  message: [
    "عيد ميلاد سعيد يا نورهان!🎉",
    "",
    "أتمنى ليكي يا قمري يوم سعيد وسنة جديدة من عمرك مليئة بالذكريات الجميلة وتحققي كل اللي تتمنية نجاح ومال وأشغال وحب وكل ما يهواه قلبك، وماتخليش أبدا أبدا أي شئ او شخص يحسسك بشعور سيء او يأثر على نفسيتك وروحك، أنتي جميلة...وتستحقي كل جميل في الحياة💖✨ .",
    "",
    "سنة جديدة لينا وأحنا مع بعض🫂، سنة جديدة هنصنع فيها ذكريات أجمل من ما كان ،عدينا كتيير مواقف مع بعض وخلافات مع بعض وعدناها كلها 💖،شكرا لوجودك في حياتي يا أغلى شخص دخل حياتي ،يا أفضل صديقة ممكن شخص يحظى بيها في حيات 💖🥺.",
    "",
    "أتمنى من قلبي تعجبك الهدية البسيطة دية🫶 ،إن شاء الله دائماً وابداً نحتفل مع بعض بعيد ميلادك....ووعد السنة الجاية هيبقى عيد ميلاد مختلف🙃",
    "",
    "- صديقك, حسام",
  ],

  /* Theme Colors - Change these to customize the entire website theme! */
  colors: {
    primary: "#ec4899", // main color (buttons, accents)
    light: "#fdf2f8", // lightest shade (backgrounds)
    medium: "#f9a8d4", // medium shade (decorations)
    dark: "#db2777", // darkest shade (hover states)
  },

  /* Typing Animation Text (shown on the start screen) */
  typingText: {
    first: "Hey, wait a second!",
    second: "This website is only for someone special.",
  },
};

export type Config = typeof config;

