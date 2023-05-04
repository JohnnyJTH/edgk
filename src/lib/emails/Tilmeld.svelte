<script>
  import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Section,
    Column,
    Heading,
    Text,
  } from "svelte-email";

  const main = {
    backgroundColor: "#fff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };

  const paragraph = {
    fontSize: 16,
  };

  const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
  };

  export let dataName = "N/A";
  export let dataAddress = "N/A";
  export let dataCity = "N/A";
  export let dataPostalCode = "N/A";
  export let dataEmail = "N/A";
  export let dataPhone = "N/A";
  export let dataBirthday = "N/A";
</script>

<Html>
  <Head />
  <Preview preview="Ny tilmelding til klubbben" />
  <Body style={main}>
    <Container>
      <Section style={content}>
        <Column>
          <Heading
            style={{
              fontSize: 32,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Hej Johan,
          </Heading>
          <Heading
            as="h2"
            style={{
              fontSize: 26,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Der er en ny tilmelding til klubben.
          </Heading>

          <Text style={paragraph}>
            <b>Navn: </b>
            {dataName}
          </Text>
          <Text style={{ ...paragraph, marginTop: -5 }}>
            <b>Addresse: </b>
            {dataAddress}
          </Text>
          <Text style={{ ...paragraph, marginTop: -5 }}>
            <b>By: </b>
            {dataCity} ({dataPostalCode})
          </Text>
          <Text style={{ ...paragraph, marginTop: -5 }}>
            <b>Email: </b>
            {dataEmail}
          </Text>
          <Text style={{ ...paragraph, marginTop: -5 }}>
            <b>Telefon: </b>
            {dataPhone}
          </Text>
          <Text style={{ ...paragraph, marginTop: -5 }}>
            <b>Fødselsdag: </b>
            {dataBirthday}
          </Text>

          <Text style={paragraph}>
            If this was you, there's nothing else you need to do.
          </Text>
          <Text style={{ ...paragraph, marginTop: -5 }}>
            If this wasn't you or if you have additional questions, please see
            our support page.
          </Text>
        </Column>
      </Section>

      <Text
        style={{
          textAlign: "center",
          fontSize: 12,
          color: "rgb(0,0,0, 0.7)",
        }}
      >
        © 2023 | EDGK, Jespervej 309, 3480 Fredensborg | www.edgk.dk
      </Text>
    </Container>
  </Body>
</Html>
