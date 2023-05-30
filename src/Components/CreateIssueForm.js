import { Col, Container, Row } from "react-bootstrap";
import Button from "@mui/material/Button";

export default function CreateIssueForm() {
  return (
    <>
      <Container>
        <Row>
          {/* <Col>
        <div style={{width:"20rem",height:"14rem" }}>
          <img src="/Images/header.png" />
        </div>
        </Col> */}
          <Col sm>
            <div className="mx-auto">
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-0">
                <div className="text-center">
                  <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    Create New Issue
                  </h1>
                </div>
              </div>

              <form
                action="#"
                method="POST"
                className="m-auto mt-20 max-w-l sm:mt-20 "
              >

                <div className="grid  gap-x-8 gap-y-3 sm:grid-cols-2">
                  <div className="mt-2">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Issue Name
                    </label>

                    <div className="mt-0">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block  w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6 text-lg"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="Description"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Description
                    </label>

                    <div className="mt-0">
                      <input
                        type="text"
                        name="description"
                        id="description"
                        autoComplete="given-name"
                        className="block  w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6 text-lg"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Issue Start Date
                    </label>
                    <div className="mt-0">
                      <input
                        type="date"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Issue End Date
                    </label>
                    <div className="mt-0">
                      <input
                        type="date"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="mt-0">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Issue Type
                    </label>
                    <div className="mt-0">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="mt-0">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Priority
                    </label>
                    <div className="mt-0">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="mt-0">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Assign To
                    </label>
                    <div className="mt-0">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="mt-0">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Status
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mx-auto mt-3.5 d-flex align-items-center justify-content-center ">
                  {" "}
                  <Button
                    variant="contained"
                    className="justify-content-center flex items-center"
                  >
                    Update
                  </Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
