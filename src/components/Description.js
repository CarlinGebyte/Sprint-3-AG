import React from "react";
import ReactImageMagnify from "react-image-magnify";

function Description() {
  const description = JSON.parse(localStorage.getItem("product"));
  return (
    <main>
      <div className="flex justify-between">
        <div className="px-6 pt-4 pb-2">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Producto",
                isFluidWidth: true,
                src: description.image,
              },
              largeImage: {
                src: description.image,
                width: 450,
                height: 450,
              },
            }}
          />
        </div>
        <div className="px-6 pt-4 pb-2">
          <h1 className="font-bold text-xl mb-2">{description.name}</h1>
          <p className="text-gray-700 text-base">Marca: TripleGato</p>

          <p className="font-semibold text-xl mb-2">$ {description.price}</p>
          <h1 className="font-bold text-base mb-2">Acerca de este artículo</h1>

          <p className="text-gray-700 text-base">{description.description}</p>
          <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {description.category}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <p className="font-semibold text-xl mb-2">$ {description.price}</p>
          <p className="font-semibold text-base mb-2">Llega: hoy</p>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Agregar al carrito
          </button>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <h1 className="font-bold text-xl mb-2">
          Productos relacionados con este artículo
        </h1>
        <div className="flex">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/vak.png"
              alt="Cámara"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">VAK Videocámara</div>
              <div className="font-semibold text-xl mb-2">$ 5000</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/bigking.png"
              alt="Lente"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Bigking lente</div>
              <div className="font-semibold text-xl mb-2">$ 5000</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/vak.png"
              alt="Cámara"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">VAK Videocámara</div>
              <div className="font-semibold text-xl mb-2">$ 5000</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/bigking.png"
              alt="Lente"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Bigking lente</div>
              <div className="font-semibold text-xl mb-2">$ 5000</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <h1 className="font-bold text-xl mb-2">
          Inspirado por tu historial de búsqueda
        </h1>
        <div className="flex">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/Rectangle%2037.png"
              alt="Call of Duty Black Ops"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Call of Duty Black Ops
              </div>
              <div className="font-semibold text-xl mb-2">$ 5000</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #PS5
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/Rectangle%203.png"
              alt="Ghost of Tsushima "
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Ghost of Tsushima </div>
              <div className="font-semibold text-xl mb-2">$ 5000</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #PS4
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/Rectangle%207.png"
              alt="Mortal Kombat 11"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Mortal Kombat 11</div>
              <div className="font-semibold text-xl mb-2">$ 5000</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #PS5
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/Rectangle.png"
              alt="Just Dance 2021"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Just Dance 2021</div>
              <div className="font-semibold text-xl mb-2">$ 5000</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #PS5
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <h1 className="font-bold text-xl mb-2">Opiniones de clientes</h1>
      </div>
    </main>
  );
}

export default Description;
