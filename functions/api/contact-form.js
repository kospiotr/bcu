export async function onRequestPost(context) {
    let input = await context.request.formData();

    const response = await fetch('https://formspree.io/f/xblgrwro', {
        method: 'POST',
        body: JSON.stringify({
            name: input.get('name'),
            email: input.get('email'),
            subject: input.get('subject'),
            message: input.get('message'),
        }),
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        return Response.redirect('/thank-you.html', 301);
    } else {
        return new Response('Error ', {
            status: 500,
        });
    }

}