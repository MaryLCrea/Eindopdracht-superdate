import React, {useState} from 'react';
import './AlgVw.css';
import CondiCard from "../../components/condicard/CondiCard";
import {Link} from "react-router-dom";
import HomeLink from "../../components/homelink/HomeLink";
import NavBarHome from "../../components/navbarhome/NavBarHome";

function AlgVw() {
    const {openC, setOpenC} = useState(null);

    return (
        <>
            <NavBarHome/>
            <section className="outer-page-container">
                <article className="inner-page-container pages">
                    <header>
                        <h2>General Terms and Conditions</h2>
                        <h3>These Terms and Conditions are effective as of January 1, 2025</h3>
                    </header>
                    <CondiCard title="Artikel 1. Definitions">
                        <br/>
                        <h6>Participant:</h6> The contracting party of SuperDate within the framework of this agreement.
                        <h6>Website:</h6> www.superdate.nl.
                        <h6>Material:</h6> Content provided by the Participant for publication on the Website, such as
                        profile names, texts, photos, and (chat) messages.
                        <h6>Abuse:</h6> The use of the Website or the posting of material that:
                        violates the rights or privacy of others; contains unsolicited commercial information or spam;
                        distributes commercial SMS numbers; offers paid services;
                        contains offensive or insulting statements; assumes another identity;
                        uses someone else's account details;
                        infringes intellectual property rights;
                        publishes or reproduces material without permission.
                        <h6>Standard Access:</h6> Access to the Website where the Participant has limited use of the
                        available services.
                        <h6>Exclusive Access:</h6> Access to the Website where the Participant can use the services that
                        fall under exclusive access.
                        <h6>Access Type:</h6> The specific services that the Participant can use on the Website, such as
                        Standard Access or Exclusive Access.
                        <h6>Subscription:</h6> An agreement in which the Participant specifies the amount SuperDate will
                        charge for a paid access type over a specific period.
                        The subscription is automatically renewed once the period of the paid access type expires,
                        depending on the chosen payment method.
                        <h6>Login Code:</h6> The code provided by SuperDate to the Participant to gain access to the
                        Website.
                    </CondiCard>

                    <CondiCard title="Article 2. Agreement">
                        These general terms and conditions form an integral part of every agreement concluded between
                        the Website and the Participant and apply to every offer and agreement.
                        Deviations from these general terms and conditions are only valid if they have been accepted in
                        writing by the Website.
                        The agreement is established when the Participant submits the registration form stated on the
                        Website via the Website and this form has been received by the Website.
                        The agreement is personal and non-transferable.
                        Participation is only possible for persons aged 18 and older.
                    </CondiCard>

                    <CondiCard title="Article 3. Price and Payment">
                        The amounts stated on the Website include 21% VAT.
                        The agreement for Standard Access ends immediately upon termination by the Website or the
                        Participant.
                        The agreement for a Subscription is entered into for an indefinite period and is renewed until
                        cancellation.
                        This agreement is established upon receipt of the Participant’s payment by the Website.
                        By completing the payment form on the Website, the Participant authorizes the Website to
                        periodically deduct the due amount from the Participant's bank account or credit card in the
                        case of a Subscription with automatic renewal.
                        This depends on the chosen payment method and is also specified on the Website in the
                        explanation for the selected payment method.
                        If the amount due by the Participant cannot be (fully) debited from the provided bank account or
                        credit card after receipt of the payment form, access to the paid features of the Website will
                        be revoked.
                        If a payment is reversed (chargeback) by the Participant or if an automatic debit fails for any
                        other reason, the Participant is in default of their payment obligation.
                        This may incur additional costs, which the Website may charge to the Participant in addition to
                        the principal sum.
                        If payment remains outstanding, the Website may engage a debt collection agency.
                        In such cases, the Participant is liable for collection fees of 15% of the principal sum, with a
                        minimum of €40, in accordance with the Dutch regulation on extrajudicial collection costs.
                        Before involving a debt collection agency, the Website will first send a reminder via email.
                        The Website may unilaterally adjust, expand, or withdraw the Subscription rates or access rights
                        associated with the Access Type.
                        If a promotion or discount applies at the time of subscribing, it only applies to the first
                        subscription period.
                        For subsequent periods, no promotion or discount will be applied unless explicitly announced
                        otherwise.
                        The Website is entitled to index the agreed prices for active subscriptions as of January 1st of
                        each calendar year based on the Consumer Price Index (CPI) published by Statistics Netherlands
                        (CBS).
                    </CondiCard>

                    <CondiCard title="Article 4. Right of Withdrawal">
                        The Participant has the right to terminate the Subscription agreement without stating a reason
                        within at least 14 days from the date of conclusion of the agreement (right of withdrawal).
                        The Participant who exercises this right must inform the Website unequivocally, preferably via
                        the contact form on the Website.
                        Since the Participant gains immediate access to and can use the agreed services upon entering
                        into the agreement, a reasonable fee of €1.50 per day or part thereof will be charged for the
                        duration of the agreement up to the moment of withdrawal, with a maximum equal to the already
                        paid subscription fee.
                        The Website may offset the due amount against the subscription fee already paid, and any
                        remaining balance will be refunded to the Participant.
                    </CondiCard>

                    <CondiCard title="Article 5. User Rights">
                        The Website grants the Participant a non-exclusive right to access the Website to view the
                        registered data on the Website.
                        This right of access only includes the right to use the Website for its intended purpose.
                        The Participant is fully responsible for logging into the Website and using the login code
                        provided by the Website.
                        The Participant has no right to transfer the login code or the access rights described in
                        paragraph 1 of this article.
                        The Participant must use the Website lawfully and refrain from:
                        - Accessing or attempting to access computer systems or networks other than their own;
                        - Testing or probing the security of the Website or networks other than their own;
                        - Disrupting the operation of the Website or networks other than their own;
                        - Renting, transferring, or making accessible to third parties any data accessible under Article
                        4.1 rights;
                        - Creating, distributing, or introducing computer viruses or software that may harm the Website;
                        - Violating intellectual property rights or other users' rights.
                        Any actions by third parties using the Participant’s login code are attributed to the
                        Participant as if they were their own actions.
                        The Website reserves the right to temporarily or permanently deactivate the Participant’s login
                        code without prior notice if they fail to comply with obligations to the Website.
                    </CondiCard>

                    <CondiCard title="Article 6. Login Code">
                        The Participant’s login code is confidential. The Website and the Participant take reasonable
                        measures to prevent others from accessing the login code.
                        If the Website detects or reasonably suspects unauthorized use of the login code, it will
                        immediately block access to the Website via that login code.
                        The Website will notify the Participant of the unauthorized use and provide a replacement login
                        code as soon as possible.
                        If the unauthorized use is not attributable to the Website, the Participant must reimburse the
                        Website for administrative costs related to blocking and replacing the login code, as well as
                        any unauthorized usage costs.
                    </CondiCard>

                    <CondiCard title="Article 7. Posting of Material">
                        The Participant posts material on the Website at their own risk.
                        The Participant must not post profile names, texts, or photos that are offensive, racist, or
                        illegal.
                        The Participant must not post material that allows other Participants to contact them outside
                        the Website’s provided communication methods.
                        This includes addresses, phone numbers, emails, or links to external websites containing such
                        information.
                        The Website will remove any such material without prior consultation or notification.
                    </CondiCard>

                    <CondiCard title="Article 8. Email Offers">
                        If a Participant has explicitly agreed to receive newsletters and Website offers, they consent
                        to receiving promotional emails.
                        These emails may contain exclusive discounts or promotions.
                        The Participant can unsubscribe at any time using the link at the bottom of such emails.
                        The Website’s Privacy and Cookie Policy outlines how personal data and email addresses are
                        processed.
                    </CondiCard>

                    <CondiCard title="Article 9. Abuse">
                        The Website may immediately terminate the agreement, remove material, restrict services, and
                        block access in cases of misuse.
                        No refunds will be provided for terminated accounts due to misuse.
                        The Website may impose a €1,000 fine per violation, including misuse of personal data, account
                        information, photos, or messages.
                        Additional legal action and claims for damages may also be pursued.
                    </CondiCard>

                    <CondiCard title="Article 10. Data">
                        The Privacy and Cookie Policy outlines how privacy is safeguarded.
                        The Participant indemnifies the Website against claims from third parties regarding the
                        processing of data in violation of applicable laws.
                    </CondiCard>

                    <CondiCard title="Article 11. Liability">
                        The Website is not liable for any (consequential) damages suffered by the Participant or third
                        parties.
                        If a court determines liability, compensation is limited to the amount paid by the Participant
                        as a subscription fee.
                    </CondiCard>

                    <CondiCard title="Article 12. Governing Law and Jurisdiction">
                        This agreement is governed by Dutch law.
                        Disputes will be settled in the court of Arnhem or another competent court chosen by the
                        Website.
                    </CondiCard>

                    <CondiCard title="Article 13. Amendments">
                        The Website reserves the right to modify these terms and apply them to existing agreements,
                        effective 30 days after notification.
                    </CondiCard>
                    <HomeLink/>
                </article>
            </section>
        </>
    );
}

export default AlgVw;