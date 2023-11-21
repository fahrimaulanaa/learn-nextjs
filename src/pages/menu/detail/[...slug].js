import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DetailMenuSlug() {
  const router = useRouter();
  console.log('apa isi router', router);

  // Check if router.query.slug is present before destructuring
  const { slug: slugQuery } = router.query;
  const { slugName, idMenu } = slugQuery || {};

  console.log('slugName, idMenu', slugName, idMenu);

  // Add additional checks or handling as needed

  return (
    <section>
      Ini detail menu
    </section>
  );
}
