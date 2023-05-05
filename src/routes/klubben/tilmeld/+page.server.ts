import { z } from 'zod';
import { message, superValidate } from 'sveltekit-superforms/server';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
// import { SENDGRID_API_KEY } from '$env/static/private';
// import { render } from 'svelte-email';
// import Tilmeld from '$lib/emails/Tilmeld.svelte';

const schema = z.object({
    name: z.string().nonempty({ message: 'Navn skal udfyldes' }),
    email: z.string().nonempty({ message: 'Email skal udfyldes' }).email({ message: 'Email skal være gyldig' }),
});

export const load: PageServerLoad = async () => {
    const form = await superValidate(schema);

    return { form };
};

export const actions: Actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, schema);
        if (!form.valid) {
            return fail(400, { form });
        }

        // const html = await render({
        //     template: Tilmeld,
        //     props: {
        //         dataName: form.data.name,
        //         dataEmail: form.data.email,
        //     }
        // })
        // const plainText = await render({
        //     template: Tilmeld,
        //     props: {
        //         dataName: form.data.name,
        //         dataEmail: form.data.email,
        //     },
        //     options: {
        //         plainText: true,
        //     }
        // })

        // const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${SENDGRID_API_KEY}` },
        //     body: JSON.stringify({
        //         personalizations: [{
        //             to: [{ email: 'edgk@ohly.dk', name: 'EDGK' }],
        //         }],
        //         from: { email: 'edgk@ohly.dk', name: 'EDGK' },
        //         to: [{ email: form.data.email, name: form.data.name }],
        //         subject: 'Ny tilmelding til klubben',
        //         content: [
        //             {
        //                 type: 'text/plain',
        //                 value: plainText
        //             },
        //             {
        //                 type: 'text/html',
        //                 value: html
        //             }
        //         ],
        //     })
        // });
        // if (!response.ok) {
        //     return message(form, "Der skete en fejl. Prøv igen senere.");
        // }

        return message(form, "Din tilmelding er modtaget. Du vil modtage en email fra kassereren. (Test, ikke sendt)");
    }
};