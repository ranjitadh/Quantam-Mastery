
export async function verifyCaptcha(token: string | null | undefined): Promise<boolean> {
    if (!token) {
        return false;
    }

    try {
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        if (!secretKey) {
            console.error('RECAPTCHA_SECRET_KEY not set');
            // Fail open or closed depending on security posture. 
            // For now, we'll log error but return false to be safe.
            return false;
        }

        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${secretKey}&response=${token}`,
        });

        const data = await response.json();
        return data.success;
    } catch (error) {
        console.error('ReCAPTCHA verification failed:', error);
        return false;
    }
}
